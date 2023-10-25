import React, { Component } from 'react';
import css from './feedback.module.css';

class FeedbackOptions extends Component {
  choiceGood = () => {
    this.props.FeedbackChoice('good');
  };

  choiceNeutral = () => {
    this.props.FeedbackChoice('neutral');
  };

  choiceBad = () => {
    this.props.FeedbackChoice('bad');
  };

  render() {
    return (
      <div className={css.btn_list}>
        <button
          type="button"
          onClick={this.choiceGood}
          className={css.statistic_btn}
        >
          Good
        </button>
        <button
          type="button"
          onClick={this.choiceNeutral}
          className={css.statistic_btn}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={this.choiceBad}
          className={css.statistic_btn}
        >
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
