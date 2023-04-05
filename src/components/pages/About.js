import React from 'react';
import img from '../../images/mypic.png'
import avatarImg from '../../images/mypicture.png'

export default function About() {
  return (
   
    
      <section id="about" className='text-gray-400 ml-[200px] body-font'>
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="container mt-5 flex flex-col px-10 py-20 justify-center ">

          <h1 className=" sm:text-2xl text-left font-mono  mb-4 font-medium text-green ">
            Hello, my name is
          </h1>
          <h2 className="sm:text-6xl text-left font-Concert  mb-4 font-medium text-light-green" >
            Yeon Seo.
          </h2>

          <h2 className="sm:text-6xl text-left font-Concert  mb-4 font-medium text-light-gray" >
            I build things for the web and mobile.
          </h2>
          <img className='self-center rounded-full'
            width={300}
            alt="profile image"
            src={img}
          />
          <p className="mb-8 leading-relaxed text-light-gray font-Noto">
            Passionate and tech-savvy web developer with experience as Inspection Engineer in Corning company with Full Stack Certificate from the University of Texas, Austin.<br></br>I have honed my skills in Node.js, Express, Handlebars, SQL, JavaScript, CSS, HTML.
            Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.
          </p>

        </div>
        </div>

      </section>
    

  );
}