import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviews }) => {
  return (
    <div className='wrapper'>
      <h2 className='heading-secondary'>Reviews ({reviews?.length})</h2>
      {reviews.map((item) => {
        return <ReviewCard key={item.id} {...item} />;
      })}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
