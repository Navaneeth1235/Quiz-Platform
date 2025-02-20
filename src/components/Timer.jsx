import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return <p className="timer">Time Left: {timeLeft} seconds</p>;
};

export default Timer;