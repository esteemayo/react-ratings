import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  window.onscroll = () => {
    setIsVisible(window.pageYOffset > 250 ? true : false);
    return () => (window.onscroll = null);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='scroll'>
      {isVisible && (
        <div onClick={handleBackToTop} className='scroll-icon-container'>
          <AiOutlineArrowUp className='scroll-icon' />
        </div>
      )}
    </div>
  );
};

export default BackToTop;
