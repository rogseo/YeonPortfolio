import React, { useState } from 'react';
import '../index.css';
import avatarImg from '../images/mypicture.png'

import { GitHub, Mail, Linkedin } from 'react-feather';




function Navbar({ currentPage, handlePageChange }) {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar)
  return (
    <>

      <header id="header" className="bg-gray">
        {/* <div className="d-flex fixed p-10 flex-column"> */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => {
            setNavbar(!navbar)}}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        {navbar ? (
          <div class="w-full md:hidden " id="navbar-default">
            <ul class="font-Concert flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 ">
              <li>
                <a href="#about"
                onClick={() => {handlePageChange('About')
                setNavbar(false)}}
                 class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:text-white ">About</a>
              </li>
              <li>
                <a href="#Project"
                    onClick={() => {handlePageChange('Project')
                    setNavbar(false)}}
                     class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  ">Project</a>
              </li>
              <li>
                <a  href="#contact"
                    //  TODO: Add a comment explaining what this logic is doing

                    onClick={() => {handlePageChange('Contact')
                    setNavbar(false)}} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white ">Contact</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1VOkx6CO0-qu1EFo61u4MsPigONrodWoM/view?usp=sharing" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden md:block" >
            <div className='d-flex fixed p-10 flex-column'>

              <nav className="flex flex-col p-4 text-white bg-blue-700 md bg-transparent md:items-center  font-Concert" id="navbar-default" >
                <a
                  href="#about"
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'font-bold text-3xl text-green' : 'font-extrabold text-3xl text-white'}
                >
                  <img className='self-center rounded-full'
                    width={70}
                    alt="profile image"
                    src={avatarImg}
                  /><p className='self-center'>Yeon Seo</p>
                </a>
              </nav>
            </div>
          </div>
        )}

        <div className="hidden md:block" >
          <div className='d-flex fixed p-10 flex-column'>

            <nav className="flex flex-col p-4 text-white bg-blue-700 md bg-transparent md:items-center  font-Concert" id="navbar-default" >
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'font-bold text-3xl text-green' : 'font-extrabold text-3xl text-white'}
              >
                <img className='self-center rounded-full'
                  width={70}
                  alt="profile image"
                  src={avatarImg}
                /><p className='self-center'>Yeon Seo</p>
              </a>


              <ul className="mt-10">
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

            <div className='mt-20'>
              <ul className='text-white'>
                {/* Column */}
                <li className='mb-3'>
                  <a href="https://github.com/rogseo">
                    <GitHub /></a>
                </li>
                <li className='mb-3'>
                  <a className="nav-link" href="https://www.linkedin.com/in/seo-yeon-6267b3158/">
                    <Linkedin /></a>
                </li>
                <li className='mb-3'>
                  <a href="mailto:rogseo@gmail.com">
                    <Mail /></a>
                </li>

              </ul>

            </div>
          </div>
        </div>



      </header>



    </>

  );
}

export default Navbar;
