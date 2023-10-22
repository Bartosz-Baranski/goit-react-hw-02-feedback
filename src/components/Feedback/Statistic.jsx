import React from 'react';
import css from './feedback.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = Math.floor((this.state.good * 100) / total);

  return (
    <div>
      {total > 0 ? (
        <>
          <h2 className={css.statistic_body}>Statistic</h2>
          <div>
            <p className={css.statistic_value}>Good: {good}</p>
            <p className={css.statistic_value}>Neutral: {neutral}</p>
            <p className={css.statistic_value}>Bad: {bad}</p>
            <p className={css.statistic_value}>Total: {total}</p>

            <p className={css.statistic_value}>
              Positive feedback: {positivePercentage}%
            </p>
          </div>
        </>
      ) : (
        <h3>There is no feedback</h3>
      )}
    </div>
  );
};

export default Statistics;
