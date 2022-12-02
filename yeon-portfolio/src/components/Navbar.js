import React from 'react';


function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav class="flex justify-between bg-black text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'font-bold text-3xl text-light-gray' : 'font-extrabold text-3xl text-white'}
        >
          Yeon Seo
        </a>


        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li className="title-font font-medium text-white mb-4 md:mb-0 hover:text-green">
            <a
              href="#Project"
              onClick={() => handlePageChange('Project')}
              //  TODO: Add a comment explaining what this logic is doing

              className={currentPage === 'Project' ? 'text-bold text-2xl text-light-gray' : 'text-2xl text-white'}
              
            >
              Project
            </a>
          </li>
          <li className="title-font font-medium text-white mb-4 md:mb-0 hover:text-green">
            <a
              href="#contact"
              //  TODO: Add a comment explaining what this logic is doing

              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'text-2xl text-bold text-light-gray' : 'text-2xl text-white'}
            >
              Contact
            </a>
          </li>
          <li className="title-font font-medium text-white mb-4 md:mb-0 hover:text-green">
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'text-2xl text-bold text-light-gray' : 'text-2xl text-white'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
