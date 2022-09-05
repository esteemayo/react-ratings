import { AiFillStar } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';

import Title from 'components/Title';
import Button from 'components/Button';
import Footer from 'components/Footer';
import Reviews from 'components/Reviews';
import { colors, data } from 'utils/data';
import BackToTop from 'components/BackToTop';
import { getFromStorage, setToStorage, tokenKey } from 'utils';

const getLocalStorage = () => {
  const reviews = getFromStorage(tokenKey);
  return reviews ?? data;
};

function App() {
  const reviewRef = useRef();
  const stars = Array(5).fill(0);
  const [review, setReview] = useState('');
  const [hoverValue, setHoverValue] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [reviews, setReviews] = useState(getLocalStorage());

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleSubmit = () => {
    const newPost = {
      id: new Date().getTime(),
      rating: currentValue,
      review,
    };

    setReviews((prev) => [newPost, ...prev]);
    setReview('');
    setCurrentValue(0);
  };

  useEffect(() => {
    reviewRef.current.focus();
    setToStorage(tokenKey, reviews);
  }, [reviews]);

  return (
    <div className='container'>
      <Title />
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

      <Reviews reviews={reviews} />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
