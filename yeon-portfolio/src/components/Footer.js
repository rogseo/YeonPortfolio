import React from 'react';
//image load
import githubIcon from '../images/github.png';
import gmailIcon from '../images/gmail.png';
import linkedInIcon from '../images/linkedIn.png';


export default function Footer() {
  return (
    <footer className='footer mt-4 bg-black'>
      <div className='flex justify-between bg-gray-900 text-white w-screen'>
        <ul className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
          {/* Column */}
          <div className='mb-4 md:mb-0'>
            <li>
              <a className="nav-link" href="https://github.com/rogseo">
                <img src={githubIcon} alt="github" /></a>
            </li>
          </div>
          <div className='mb-4 md:mb-0'>
            <li className="nav-item social">
              <a className="nav-link" href="https://www.linkedin.com/in/seo-yeon-6267b3158/">
                <img src={linkedInIcon} alt="linkedIn" /></a>
            </li>
          </div>
          <div className='mb-4 md:mb-0'>
            <li>
              <a href="mailto:rogseo@gmail.com">
                <img src={gmailIcon} alt="gmail" /></a>
            </li>
          </div>
        </ul>
      </div>
      <div className='footer-bottom mb-5'>
        <p className='text-center mt-3'>
          made by Yeon - All Rights Reserved
        </p>
      </div>


    </footer>
  );
}