import React from 'react';

const Scoreboard = ({ answers, onRestart }) => {
  const score = answers.filter((ans) => ans.isCorrect).length;

  return (
    <div className="scoreboard">
      <h2>Quiz Complete!</h2>
      <p>Your Score: {score} / {answers.length}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Scoreboard;