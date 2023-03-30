import React from 'react';
import { projects } from "../../data";
// import img from "../../images/tuneTalk demo_edit.gif";
import gitIcon from "../../images/git.png";
import resizeIcon from "../../images/resize.png";
import Footer from "../Footer";


export default function Project() {
  return (
    <div>
      <section id="projects" className="text-gray-400 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">

            <h1 className="sm:text-5xl text-5xl text-extrabold font-medium title-font mb-4 text-light-green font-extrabold font-Concert">
              App I've build
            </h1>
            <p className="lg:w-2/3 mx-auto text-4xl leading-relaxed text-green font-Concert">
              {`</>`}
            </p>
          </div>
          <ul className="flex flex-col -m-4 mt-5 shadow-md">
            {projects.map((project) => (
              <li className='relative flex flex-row justify-center item-center mb-10 min-h-fit'>

                <div id="project-content" className='w-2/3 z-10 mr-3'>
                  <div className='flex flex-col' >
                    <h3 className='text-light-green text-3xl text-left mb-2'>
                      <a className='font-mono font-extrabold text-green text-extrabold hover:text-light-green' href={project.link} >{project.title}</a>
                    </h3>
                    <div id='project-image' className='z-0 bg-green flex'>
                      <img
                        alt="gallery"
                        className="inset-0 w-full h-full object-cover border border-1 border-green object-center"
                        src={project.image}

                      //src={img}
                      />

                    </div>

                    <div id='project-description ' className='text-left bg-black text-light-gray p-5 mb-2'>
                      <p className='font-Noto'>{project.description}</p>
                    </div>
                    <ul id='project-tech-list' className='flex flex-row  mb-3'>
                      {project.tech.map((tech) => (
                        <li className='text-light-gray mr-3 font-mono'>{tech}</li>
                      )

                      )}
                    </ul>
                    <div id='project-links' className='flex flex-row justify-self-end'>
                      <a className="mr-3 hover:sepia" href={project.repo} target="_blank"><img src={gitIcon} width="20px" height="20px" /></a>
                      <a className="mr-3 hover:sepia" href={project.link} target="_blank"><img src={resizeIcon} width="20px" height="20px" /></a>

                    </div>
                  </div>



                </div>
                {/* <div id='project-image' className='z-0 bg-green flex absolute  right-0 top-0 h-100'>
                <div id='project-image' className='z-0 bg-green flex'>
                  <img
                    alt="gallery"
                    className="inset-0 w-full h-full object-cover border border-1 border-green object-center opacity-70 hover:opacity-100"
                    src={project.image}

                  //src={img}
                  />

                </div> */}

              </li>


              // <a
              //   href={project.link}
              //   key={project.image}
              //   className="w-100 p-4">
              //   <div className="flex relative">
              //     <img
              //       alt="gallery"
              //       className="absolute inset-0 w-2/3 h-full object-cover rounded-md object-center shadow-md opacity-50 hover:opacity-100"
              //       // src={project.image}
              //       src={img}
              //     />
              //     <div className="px-8 py-10 absolute right-30 top-20 relative z-10 border-4 border-light-gray bg-gray rounded-md opacity-100 hover:opacity-80
              //   0">
              //       <div className="flex justify-content-end">
              //         <a className="mr-3 hover:shadow-lg" href="https://github.com/rogseo/tuneTalk" target="_blank"><img src={gitIcon} width="30px" height="30px" /></a>
              //         <a className="col-1" href="https://immense-meadow-73808.herokuapp.com/" target="_blank"><img src={resizeIcon} width="30px" height="30px" /></a>
              //       </div>
              //       <h2 className="tracking-widest text-sm title-font font-medium text-green mb-1">
              //         {project.subtitle}
              //       </h2>
              //       <h1 className="title-font text-lg font-medium text-light-green mb-3 tailwind.theme.color.green">
              //         {project.title}
              //       </h1>
              //       <p className="leading-relaxed text-light-gray">{project.description}</p>
              //     </div>
              //   </div>
              // </a>
            ))}
          </ul>
        </div>

      </section>
      <Footer />
    </div>

  );
}