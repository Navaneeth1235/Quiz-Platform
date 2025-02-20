import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [integerAnswer, setIntegerAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleMCQSelect = (option) => {
    setSelectedOption(option);
    const isCorrect = option === question.correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    setTimeout(() => {
      setFeedback('');
      setSelectedOption(null);
      onAnswer(option);
    }, 1000);
  };

  const handleIntegerSubmit = (e) => {
    e.preventDefault();
    const isCorrect = integerAnswer.trim() === question.correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    setTimeout(() => {
      setFeedback('');
      setIntegerAnswer('');
      onAnswer(integerAnswer.trim());
    }, 1000);
  };

  return (
    <div className="question">
      <h2>{question.question}</h2>
      {question.type === 'multiple-choice' ? (
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleMCQSelect(option)}
              disabled={selectedOption !== null}
              style={{
                backgroundColor:
                  selectedOption === option
                    ? option === question.correctAnswer
                      ? '#90ee90'
                      : '#ff6347'
                    : '',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <form onSubmit={handleIntegerSubmit}>
          <input
            type="number"
            value={integerAnswer}
            onChange={(e) => setIntegerAnswer(e.target.value)}
            placeholder="Enter your answer"
            disabled={feedback !== ''}
            style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <button type="submit" disabled={feedback !== '' || !integerAnswer}>
            Submit
          </button>
        </form>
      )}
      {feedback && (
        <p className="feedback" style={{ color: feedback === 'Correct!' ? 'green' : 'red' }}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default Question;