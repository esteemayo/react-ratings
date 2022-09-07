import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

import Star from './Star';
import Button from './Button';
import { colors } from 'utils/data';
import { useGlobalContext } from 'context/reviews/ReviewContext';

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

  useEffect(() => {
    reviewRef.current.focus();
  }, []);

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
              <Star
                key={index}
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
            text='Submit review'
            icon={<FaArrowRight />}
            onClick={handleSubmit}
            disabled={review === '' ?? false}
          />
        </div>
      </div>
    </>
  );
};

export default AddReview;
