import { TOGGLE } from './DarkModeTypes';

const DarkModeReducer = (state, { type }) => {
  switch (type) {
    case TOGGLE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
