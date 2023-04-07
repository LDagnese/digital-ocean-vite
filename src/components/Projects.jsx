import React from "react";
import ProjectItem from "./ProjectItem";
import croppedImg from "../assets/cropped-placeholder.jpg";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        This is a spot to showcase my projects. #TODO Fill this out with more
        info about my coding journey.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={croppedImg} title="Louis' Awesome App" />
        <ProjectItem img={croppedImg} title="Louis' Awesome App" />
        <ProjectItem img={croppedImg} title="Louis' Awesome App" />
        <ProjectItem img={croppedImg} title="Louis' Awesome App" />
        <ProjectItem img={croppedImg} title="Louis' Awesome App" />
        <ProjectItem img={croppedImg} title="Louis' Awesome App" />
      </div>
    </div>
  );
}

export default Projects;
