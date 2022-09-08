import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useDarkModeGlobalContext } from 'context/darkmode/DarkModeContext';

const Navbar = () => {
  const { darkMode, toggle } = useDarkModeGlobalContext();

  return (
    <nav className='navbar'>
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
