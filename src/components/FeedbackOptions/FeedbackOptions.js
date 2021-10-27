// import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  // console.log(options);

  return (
    <ul className={s.listButton}>
      {options.map((option, index) => {
        console.log(option);
        return (
          <li className={s.listButtonItem} key={index}>
            <button
              type="button"
              className={s.button}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(
    PropTypes.checkPropTypes(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }).isRequired,
    ),
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(FeedbackOptions);

export default FeedbackOptions;
