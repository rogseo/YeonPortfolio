import React from 'react';
import '../index.css';
import avatarImg from '../images/mypicture.png'



function Navbar({ currentPage, handlePageChange }) {
  return (
      <nav class="px-5 xl:px-12 py-6 bg-black flex flex-row w-full items-center  font-Concert"  >
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'font-bold text-3xl text-green flex' : 'font-extrabold text-3xl text-white flex'}
        >
          <img className='self-center rounded-full'
            width={70}
            alt="profile image"
            src={avatarImg}
          /><p className='self-center'>Yeon Seo</p>
        </a>


        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li className="title-font font-medium text-white mb-4 md:mb-0 hover:text-green">
            <a
              href="#Project"
              onClick={() => handlePageChange('Project')}
              //  TODO: Add a comment explaining what this logic is doing

              className={currentPage === 'Project' ? 'text-bold text-2xl text-green' : 'text-2xl text-white'}
              
            >
              Project
            </a>
          </li>
          <li className="title-font font-medium text-white mb-4 md:mb-0 hover:text-green">
            <a
              href="#contact"
              //  TODO: Add a comment explaining what this logic is doing

              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'text-2xl text-bold text-green' : 'text-2xl text-white'}
            >
              Contact
            </a>
          </li>
          <li className="title-font font-medium text-white mb-4 md:mb-0 hover:text-green">
            <a
              href="https://drive.google.com/file/d/1VOkx6CO0-qu1EFo61u4MsPigONrodWoM/view?usp=sharing"
              // onClick={() =>handlePageChange('Resume')}
 
              className={currentPage === 'Resume' ? 'text-2xl text-bold text-green' : 'text-2xl text-white'}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

  );
}

export default Navbar;
