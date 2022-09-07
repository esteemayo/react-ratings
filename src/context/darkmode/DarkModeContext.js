import { createContext, useContext, useReducer } from 'react';

import { TOGGLE } from './DarkModeTypes';
import DarkModeReducer from './DarkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  const toggle = () => dispatch({ type: TOGGLE });

  return (
    <DarkModeContext.Provider value={{ ...state, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeGlobalContext = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
