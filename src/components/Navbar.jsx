import { useState, useEffect } from 'react';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

import { useDarkModeGlobalContext } from 'context/darkmode/DarkModeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggle } = useDarkModeGlobalContext();

  const toggleIsScrolled = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleIsScrolled);
    return () => document.removeEventListener('scroll', toggleIsScrolled);
  }, []);

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='navbar__left'>
        <h1 className='logo'>Ratings&reg;</h1>
      </div>
      <div className='navbar__right'>
        {darkMode ? (
          <LightModeOutlined className='toggle-icon' onClick={toggle} />
        ) : (
          <DarkModeOutlined className='toggle-icon' onClick={toggle} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
