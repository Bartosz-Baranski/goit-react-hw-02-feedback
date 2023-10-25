import React, { Component } from 'react';
import css from './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistic';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };
  state = { good: 0, neutral: 0, bad: 0 };

  handleChange = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + this.props.step,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.statistic_body}>
        <h1 className={css.statistic_title}>Please leave feedback</h1>
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          FeedbackChoice={this.handleChange}
        />
        <h2 className={css.statistic_body}>Statistic</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
export default Feedback;
