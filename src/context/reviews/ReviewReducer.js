import { ADD_REVIEW } from './ReviewTypes';

const ReviewReducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
      };

    default:
      return state;
  }
};

export default ReviewReducer;
