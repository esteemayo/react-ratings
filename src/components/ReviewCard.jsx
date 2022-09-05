import { AiFillStar } from 'react-icons/ai';
import { colors } from 'utils/data';

const ReviewCard = ({ rating, review }) => {
  return (
    <div className='list-items'>
      <h2 className='review'>{review}</h2>
      <p>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <AiFillStar
              key={index}
              size={17}
              color={rating >= ratingValue ? colors.orange : colors.gray}
            />
          );
        })}
      </p>
    </div>
  );
};

export default ReviewCard;
