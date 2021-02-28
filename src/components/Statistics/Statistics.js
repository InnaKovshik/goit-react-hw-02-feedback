import PropTypes from 'prop-types';
import Notification from '../Notification';

import s from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      {!!total && (
        <ul className={s.statList}>
          <li className={s.statListItem}>Good: {good}</li>
          <li className={s.statListItem}> Neutral: {neutral} </li>
          <li className={s.statListItem}>Bad: {bad}</li>
          <li className={s.statListItem}>Total: {total}</li>
          <li className={s.statListItem}>
            Positive Feedback: {positiveFeedback} %
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Statistics;
