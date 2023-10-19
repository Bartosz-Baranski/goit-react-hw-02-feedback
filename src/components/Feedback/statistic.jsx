import React from 'react';
import css from './statistic.module.css';

class Statistic extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percent: 0,
  };

  choiceGood = () => {
    this.setState(value => {
      return {
        good: value.good + 1,
        total: value.total + 1,
      };
    });
  };

  choiceNeutral = () => {
    this.setState(value => {
      return {
        neutral: value.neutral + 1,
        total: value.total + 1,
      };
    });
  };

  choiceBad = () => {
    this.setState(value => {
      return {
        bad: value.bad + 1,
        total: value.total + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad, total, percent } = this.state;

    return (
      <div className={css.statistic_body}>
        <h1 className={css.statistic_title}>Please leave feedback</h1>
        <div className={css.btn_list}>
          <button
            type="button"
            name="good"
            onClick={this.choiceGood}
            className={css.statistic_btn}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            onClick={this.choiceNeutral}
            className={css.statistic_btn}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            onClick={this.choiceBad}
            className={css.statistic_btn}
          >
            Bad
          </button>
        </div>
        <h2 className={css.statistic_body}>Statistic</h2>
        <div>
          <p className={css.statistic_value}>Good: {good}</p>
          <p className={css.statistic_value}>Neutral: {neutral}</p>
          <p className={css.statistic_value}>Bad: {bad}</p>
          <p className={css.statistic_value}>Total: {total}</p>
          <p className={css.statistic_value}>Positive feedback: {percent}%</p>
        </div>
      </div>
    );
  }
}
export default Statistic;
