import React from 'react';

// object destructure the function so we can pass in our specific props
function Navigation({ currentPage, handlePageChange }) {
  return (
    <header>
      <h2 className='name'>Nathan Flessner</h2>
    <nav>
    <ul className="nav navigation">
    <li className="nav-item">

        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // react requries use of the ternary operator for an if/else statement, where we can check which page is active and set bootstraps active link class, or to the default if that page is not active. This follows for all links down below. 
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
        <i className="fas fa-home"></i>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
        <i className="fas fa-user"></i>
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
        <i className="fas fa-file-code"></i>
          Portfolio
        </a>
      </li>
      {/* <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
        <i className="fas fa-mobile"></i>
          Contact
        </a>
      </li> */}
      <li className="nav-item">
        <a 
          className="nav-link"
          href="https://drive.google.com/file/d/1Av5ugd107ZcQdADC0Jh7jf3MvcEtM5G67aXuvJQ0ZSk/view?usp=sharing"
          target="_blank"
          rel="noreferrer">
          <i className="fas fa-file-user"></i>
          Resume
        </a>
      </li>
    </ul>
    </nav>
    </header>
  );
}
export default Navigation;