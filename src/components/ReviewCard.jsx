import Star from './Star';
import { colors } from 'utils/data';

const ReviewCard = ({ rating, review }) => {
  return (
    <div className='list-items'>
      <h2 className='review'>{review}</h2>
      <p>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <Star
              key={index}
              color={rating >= ratingValue ? colors.orange : colors.gray}
            />
          );
        })}
      </p>
    </div>
  );
};

export default ReviewCard;
