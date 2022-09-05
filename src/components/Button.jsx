import PropTypes from 'prop-types';

const Button = ({ text, ...rest }) => {
  return (
    <button {...rest} className='btn'>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
