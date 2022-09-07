import { createContext, useContext, useReducer, useEffect } from 'react';

import { data } from 'utils/data';
import ReviewReducer from './ReviewReducer';
import { ADD_REVIEW, DELETE_REVIEW } from './ReviewTypes';
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

  const deleteReview = (id) => {
    dispatch({
      type: DELETE_REVIEW,
      payload: id,
    });
  };

  useEffect(() => {
    setToStorage(tokenKey, state.reviews);
  }, [state.reviews]);

  return (
    <ReviewContext.Provider value={{ ...state, addReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ReviewContext);
};

export default ReviewProvider;
