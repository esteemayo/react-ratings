const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer-text'>
        &copy; {year} All rights reserved. Design by{' '}
        <span>Emmanuel Adebayo&trade;</span>
      </p>
    </footer>
  );
};

export default Footer;
