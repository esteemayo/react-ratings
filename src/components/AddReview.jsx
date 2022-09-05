import { useRef, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import Button from './Button';
import { colors } from 'utils/data';
import { useGlobalContext } from 'context/ReviewContext';

const AddReview = () => {
  const reviewRef = useRef();
  const stars = Array(5).fill(0);
  const { addReview } = useGlobalContext();
  const [review, setReview] = useState('');
  const [hoverValue, setHoverValue] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleClear = () => {
    setReview('');
    setCurrentValue(0);
  };

  const handleSubmit = () => {
    const newPost = {
      id: new Date().getTime(),
      rating: currentValue,
      review,
    };

    addReview(newPost);
    handleClear();
  };

  return (
    <>
      <textarea
        placeholder='What`s your feedback'
        value={review}
        ref={reviewRef}
        onChange={(e) => setReview(e.target.value)}
      />
      <div className='reviewer-meta'>
        <div className='reviewer-stars'>
          {stars.map((_, index) => {
            return (
              <AiFillStar
                key={index}
                size={17}
                onClick={() => handleClick(index + 1)}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.gray
                }
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                className='icon'
              />
            );
          })}
        </div>
        <div className='btn-wrapper'>
          <Button
            text='Submit review →'
            onClick={handleSubmit}
            disabled={review === '' ?? false}
          />
        </div>
      </div>
    </>
  );
};

export default AddReview;
