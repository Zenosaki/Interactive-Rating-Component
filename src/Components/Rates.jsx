import PropTypes from 'prop-types';
import { useState } from 'react'; // Import useState hook if not already imported
import { TakeRate, getCurrentRate } from '../scripts/rate';

export default function Rate(props) {
  const [isActive, setIsActive] = useState(getCurrentRate() === props.rate);

  const handleClick = () => {
    TakeRate(props.rate);
    setIsActive(true); 
  };

  return (
    <div className={`icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <h4>{props.rate}</h4>
    </div>
  );
}

Rate.propTypes = {
  rate: PropTypes.string.isRequired,
};
