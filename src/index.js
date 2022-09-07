import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReviewProvider from 'context/reviews/ReviewContext';
import DarkModeProvider from 'context/darkmode/DarkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
