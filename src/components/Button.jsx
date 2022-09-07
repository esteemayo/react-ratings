import PropTypes from 'prop-types';

const Button = ({ text, icon, ...rest }) => {
  return (
    <button {...rest} className='btn'>
      {text} {icon}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default Button;
