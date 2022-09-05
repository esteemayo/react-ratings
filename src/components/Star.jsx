import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

const Star = ({ size, className, ...rest }) => {
  return <AiFillStar {...rest} size={size} className={className} />;
};

Star.defaultProps = {
  size: 17,
};

Star.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Star;
