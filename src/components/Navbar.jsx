import { FaLightbulb, FaPowerOff } from 'react-icons/fa';
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
          <FaLightbulb className='toggle' onClick={toggle} />
        ) : (
          <FaPowerOff className='toggle' onClick={toggle} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
