import { ADD_REVIEW, DELETE_REVIEW } from './ReviewTypes';

const ReviewReducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
      };

    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};

export default ReviewReducer;
