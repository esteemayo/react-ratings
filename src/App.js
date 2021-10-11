import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import './App.css';

const colors = {
  orange: '#FFBA5A',
  gray: '#a9a9a9',
};

function App() {
  const stars = Array(5).fill(0);
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

  return (
    <div style={styles.container}>
      <h2>Star Ratings in React</h2>
      <div>
        {stars.map((_, index) => {
          return (
            <AiFillStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              style={{ marginRight: 10, cursor: 'pointer' }}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <textarea
        placeholder='What`s your feedback'
        style={styles.textarea}
      />
      <button style={styles.button}>Submit</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    margin: '20px 0',
    borderRadius: 5,
    resize: 'none',
    minHeight: 100,
    width: 300,
    padding: 10,
  },
  button: {
    border: '1px solid #a9a9a9',
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default App;
