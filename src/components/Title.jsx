import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <h1 className='heading-primary'>{title}</h1>;
};

Title.defaultProps = {
  title: 'Star Ratings in React',
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
