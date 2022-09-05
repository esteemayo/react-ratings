const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer-text'>
        &copy; {year} All rights reserved. Design by Emmanuel Adebayo&trade;
      </p>
    </footer>
  );
};

export default Footer;
