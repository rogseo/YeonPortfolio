import React from 'react';
import { CodeIcon, linkIcon } from "@heroicons/react/solid";
import { projects } from "../../data";
import img from "../../images/tuneTalk demo_edit.gif";
import gitIcon from "../../images/git.png";
import resizeIcon from "../../images/resize.png";
import Footer from "../Footer";



export default function Project() {
  return (
    <div>
      <section id="projects" className="text-gray-400 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
            <h1 className="sm:text-4xl text-3xl text-extrabold font-medium title-font mb-4 text-light-green">
              PORTFOLIO
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-green">
              App I've build
            </p>
          </div>
          <div className="flex flex-wrap -m-4 shadow-md">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative">
                  
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover rounded-md object-center shadow-md"
                    // src={project.image}
                    src={img}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-light-gray bg-gray rounded-md opacity-0 hover:opacity-80
                0">
                  <div className="flex justify-content-end">
                    <a className="mr-3 hover:shadow-lg" href="https://github.com/rogseo/tuneTalk" target="_blank"><img src={gitIcon} width="30px" height="30px"/></a>
                    <a className="col-1" href="https://immense-meadow-73808.herokuapp.com/" target="_blank"><img src={resizeIcon} width="30px" height="30px"/></a>
                  </div>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-light-green mb-3 tailwind.theme.color.green">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-light-gray">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </section>
      <Footer />
    </div>

  );
}