import PropTypes from 'prop-types';

export default function Rate(props) {
  const { rate, isActive, onClick } = props;

  const handleClick = () => {
    onClick(rate);
  };

  return (
    <div className={`icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <h4>{rate}</h4>
    </div>
  );
}

Rate.propTypes = {
  rate: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
