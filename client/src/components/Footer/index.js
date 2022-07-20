import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by <a href='https://github.com/Arankin7' rel='noreferrer' target='_blank'>Anthony Rankin</a>
      </div>
    </footer>
  );
};

export default Footer;
