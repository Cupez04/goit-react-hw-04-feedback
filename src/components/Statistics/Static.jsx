import React from "react";
import s from './Statistics.module.css'
import PropTypes from 'prop-types'

export default class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;

    if (total >= 1) {
      return (
        <>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback: {positiveFeedback} %</p> 
        </>
      );
    } else if(total === 0){
        return <Message
        message={'No Feedback'}
        >
        </Message>
    }
  }
}
const Message = ({ message }) => {
  return (
    <p className={s.info}>{message}</p>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};
