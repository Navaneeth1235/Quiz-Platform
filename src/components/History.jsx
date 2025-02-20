import React from 'react';

const History = ({ attempts }) => {
  return (
    <div className="history">
      <h3>Attempt History</h3>
      {attempts.length > 0 ? (
        <ul>
          {attempts.map((attempt) => (
            <li key={attempt.id}>
              {new Date(attempt.date).toLocaleString()} - Score: {attempt.score}/{attempt.total}
            </li>
          ))}
        </ul>
      ) : (
        <p>No attempts yet.</p>
      )}
    </div>
  );
};

export default History;