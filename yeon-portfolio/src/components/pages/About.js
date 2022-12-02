import React from 'react';
import Figure from 'react-bootstrap/Figure';
import img from '../../images/mypicture.png'

export default function About() {
  return (
    <section id="about">
      <div className="container mt-5 flex flex-col px-10 py-20 justify-center">
        <h1 className="font-extrabold sm:text-4xl text-center text-3xl mb-4 font-medium text-teal-300">
          HELLO
          <br className="hidden lg:inline-block" />I'm Yeon Seo
        </h1>
        <Figure className='self-center'>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={img}
          />
        </Figure>
        <p className="mb-8 leading-relaxed text-light-gray">
          Passionate and tech-savvy web developer with experience as Inspection Engineer in Corning company with Full Stack Certificate from the University of Texas, Austin. I have honed my skills in Node.js, Express, Handlebars, SQL, JavaScript, CSS, HTML.
          Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.
        </p>

      </div>

    </section>

  );
}