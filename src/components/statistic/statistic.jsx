import React from 'react';
import css from './statistic.module.css';

class Statistic extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div className={css.statistic_body}>
        <h1 className={css.statistic_title}>Please leave feedback</h1>
        <div className={css.btn_list}>
          <button className={css.statistic_btn}>Good</button>
          <button className={css.statistic_btn}>Neutral</button>
          <button className={css.statistic_btn}>Bad</button>
        </div>
        <h2 className={css.statistic_body}>Statistic</h2>
        <div>
          <p className={css.statistic_value}>Good: 3</p>
          <p className={css.statistic_value}>Neutral: 2</p>
          <p className={css.statistic_value}>Bad: 2</p>
        </div>
      </div>
    );
  }
}
export default Statistic;
