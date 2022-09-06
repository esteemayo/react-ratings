import { createContext, useContext, useReducer, useEffect } from 'react';

import { data } from 'utils/data';
import { ADD_REVIEW } from './ReviewTypes';
import ReviewReducer from './ReviewReducer';
import { getFromStorage, setToStorage, tokenKey } from 'utils';

const getLocalStorage = () => {
  const reviews = getFromStorage(tokenKey);
  return reviews ?? data;
};

const INITIAL_STATE = {
  reviews: getLocalStorage(),
};

const ReviewContext = createContext(INITIAL_STATE);

const ReviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReviewReducer, INITIAL_STATE);

  const addReview = (review) => {
    dispatch({
      type: ADD_REVIEW,
      payload: review,
    });
  };

  useEffect(() => {
    setToStorage(tokenKey, state.reviews);
  }, [state.reviews]);

  return (
    <ReviewContext.Provider value={{ ...state, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ReviewContext);
};

export default ReviewProvider;
