import React from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.floor((good / total) * 100) : 0;

  return (
    <div>
      {total > 0 ? (
        <>
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
          </div>
        </>
      ) : (
        <h3>There is no feedback</h3>
      )}
    </div>
  );
};

export default Statistics;
