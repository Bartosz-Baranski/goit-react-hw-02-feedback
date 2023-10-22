import React from 'react';

import css from './feedback.module.css';

class FeedbackOptions extends React.Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, positivePercentage: 0 };

  choiceGood = () => {
    this.setState(value => {
      return {
        good: value.good + 1,
      };
    });
  };

  choiceNeutral = () => {
    this.setState(value => {
      return {
        neutral: value.neutral + 1,
      };
    });
  };

  choiceBad = () => {
    this.setState(value => {
      return {
        bad: value.bad + 1,
      };
    });
  };
  // // sumTotal = () => {
  // //   return this.state.good + this.state.neutral + this.state.bad;
  // // };
  // countTotalFeedback = () => {
  //   // this.setState(value => {
  //   //   return { total: value.total + 1 };
  //   // });
  //   // this.setState(value => {
  //   //   return {
  //   //     total: (value.total =
  //   //       this.state.good + this.state.bad + this.state.neutral),
  //   //   };
  //   // });
  //   return this.state.good + this.state.bad + this.state.neutral;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return Math.floor((this.state.good * 100) / this.state.total);
  // };

  render() {
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
      </div>
    );
  }
}
export default FeedbackOptions;
