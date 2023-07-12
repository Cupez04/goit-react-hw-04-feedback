import React, {useState} from "react";
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Static'


const FeedbackOptions = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackClick = (feedbackType) => {
    switch (feedbackType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  const calculateTotal = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = calculateTotal();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  const total = calculateTotal();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Feedback</h1>
      <button className={s.button} onClick={() => handleFeedbackClick('good')}>
        Good
      </button>
      <button className={s.button} onClick={() => handleFeedbackClick('neutral')}>
        Neutral
      </button>
      <button className={s.button} onClick={() => handleFeedbackClick('bad')}>
        Bad
      </button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        positiveFeedback={positivePercentage}
      />
    </div>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    regular: PropTypes.number.isRequired
  }).isRequired
};



