import React from 'react';
import '../index.css';
import avatarImg from '../images/mypicture.png'

import { GitHub, Mail, Linkedin } from 'react-feather';




function Navbar({ currentPage, handlePageChange }) {
  return (
    <>

      <header id="header" className="bg-gray">
        <div className="d-flex fixed p-10 flex-column">



          <nav className="items-center  font-Concert"  >
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
                  <a  href="https://github.com/rogseo">
                    <GitHub/></a>
                </li>        
                <li className='mb-3'>
                  <a className="nav-link" href="https://www.linkedin.com/in/seo-yeon-6267b3158/">
                    <Linkedin/></a>
                </li>       
                <li className='mb-3'>
                  <a href="mailto:rogseo@gmail.com">
                    <Mail/></a>
                </li>
             
            </ul>

          </div>
        </div>



      </header>



    </>

  );
}

export default Navbar;
