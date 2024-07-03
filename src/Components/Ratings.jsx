import PropTypes from 'prop-types';
import { useState } from 'react';
import icon from '../assets/images/icon-star.svg';
import Rate from './Rates';
import { getCurrentRate, TakeRate } from '../scripts/rate';

export default function Ratings(props) {
  const [currentRate, setCurrentRate] = useState(getCurrentRate());

  const handleRateClick = (rate) => {
    setCurrentRate(rate);
    TakeRate(rate);
  };

  return (
    <div className="rating-container">
      <img src={icon} alt="icon" className="icon" />
      <div className="Rating-Content">
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="ratings-icons">
          {['1', '2', '3', '4', '5'].map((rate) => (
            <Rate
              key={rate}
              rate={rate}
              isActive={rate === currentRate}
              onClick={handleRateClick}
            />
          ))}
        </div>
        <button onClick={() => props.submit(getCurrentRate())}>SUBMIT</button>
      </div>
    </div>
  );
}

Ratings.propTypes = {
  submit: PropTypes.func,
};
