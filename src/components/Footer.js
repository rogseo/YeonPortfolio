import React from 'react';
import { GitHub, Mail, Linkedin } from 'react-feather';


export default function Footer() {
  return (
    <footer className='footer mt-4'>
      <div className='flex justify-between bg-gray-900 text-white w-screen'>
        <ul className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
          {/* Column */}
          <div className='mb-4 md:mb-0'>
            <li>
              <a className="nav-link" href="https://github.com/rogseo">
                <GitHub/></a>
            </li>
          </div>
          <div className='mb-4 md:mb-0'>
            <li className="nav-item social">
              <a className="nav-link" href="https://www.linkedin.com/in/seo-yeon-6267b3158/">
                <Mail/></a>
            </li>
          </div>
          <div className='mb-4 md:mb-0'>
            <li>
              <a href="mailto:rogseo@gmail.com">
                <Linkedin/></a>
            </li>
          </div>
        </ul>
      </div>
      <div className='footer-bottom mb-5'>
        <p className='text-center mt-10 mb-10 text-light-gray'>
         made by Yeon - 2023
        </p>
      </div>


    </footer>
  );
}