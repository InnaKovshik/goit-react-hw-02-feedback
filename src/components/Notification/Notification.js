import PropTypes from 'prop-types';

import s from './Notification.module.scss';

const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
