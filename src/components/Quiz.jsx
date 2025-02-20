import React, { useState, useEffect } from 'react';
import { quizData } from '../data/quizData';
import Question from './Question';
import Timer from './Timer';
import Scoreboard from './Scoreboard';
import History from './History';
import { saveAttempt, getAttempts } from '../utils/db';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizComplete, setQuizComplete] = useState(false);
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    getAttempts().then(setAttempts);
  }, []);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === quizData[currentQuestion].correctAnswer;
    const newAnswers = [...answers, { questionId: currentQuestion + 1, isCorrect }];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setQuizComplete(true);
      const score = newAnswers.filter((ans) => ans.isCorrect).length;
      saveAttempt(score, quizData.length).then(() =>
        getAttempts().then(setAttempts)
      );
    }
  };

  const handleTimeUp = () => {
    handleAnswer(null);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizComplete(false);
    setTimeLeft(30);
  };

  return (
    <div className="quiz-container">
      {!quizComplete ? (
        <>
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} />
          <Question question={quizData[currentQuestion]} onAnswer={handleAnswer} />
          <p>Question {currentQuestion + 1} of {quizData.length}</p>
        </>
      ) : (
        <Scoreboard answers={answers} onRestart={restartQuiz} />
      )}
      <History attempts={attempts} />
    </div>
  );
};

export default Quiz;