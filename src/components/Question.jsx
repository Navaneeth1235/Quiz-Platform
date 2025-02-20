import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    const isCorrect = option === question.correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    setTimeout(() => {
      setFeedback('');
      setSelectedOption(null);
      onAnswer(option);
    }, 1000);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option)}
          disabled={selectedOption !== null}
          style={{
            backgroundColor:
              selectedOption === option
                ? option === question.correctAnswer
                  ? '#90ee90'
                  : '#ff6347'
                : '#fff',
          }}
        >
          {option}
        </button>
      ))}
      {feedback && <p style={{ color: feedback === 'Correct!' ? 'green' : 'red' }}>{feedback}</p>}
    </div>
  );
};

export default Question;