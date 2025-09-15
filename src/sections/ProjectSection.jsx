import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HeadTitle } from "../components/HeadTitle";
gsap.registerPlugin(ScrollTrigger);

export const ProjectSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);


  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,

    ];
    projects.map((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: (index + 1) * 0.5,
          ScrollTrigger: {
            trigger: project,
            start: "top 50%",
          },
        }
      );
    });
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="flex gap-5 justify-between items-center w-full xl:mt-20 mt-5 px-5 md:px-20 py-10 md:py-20"
    >
      <div className="w-full h-full md:px-10 px-5">
        <HeadTitle
          title="My Featured Projects"
          subTitle="🚀 A look at some of the projects I’m proud of."
        />

        <div className="flex flex-col xl:flex-row gap-7 justify-between mt-15 ">
          <div ref={project1Ref} className="flex flex-col  xl:w-[60%] gap-6">
            <div className=" xl:h-auto md:h-[50vh] h-96 relative">
              <img
                src="/images/project1.png"
                alt="projects"
                className=" w-full h-full xl:object-fill object-fill rounded-xl "
              />
            </div>
            <div className="space-y-7">
              <h2 className="text-xl xl:text-2xl md:text-2xl lg:text-4xl font-bold ">
                An AI-powered job interview platform built with Next.js,
                Firebase, TailwindCSS, and Vapi AI Voice Agents.
              </h2>
            </div>
             <div className=" xl:h-[300px] relative">
              <img
                src="/images/project5.png"
                alt="projects"
                className=" w-full h-[300px]  xl:object-fill object-fill rounded-xl "
              />
            </div>
            <div className="space-y-7">
              <h2 className="text-xl xl:text-2xl md:text-2xl lg:text-4xl font-bold ">
                  A modern social networking platform.
              </h2>
              </div>
          </div>
          <div className=" flex flex-col justify-end xl:w-[40%] md:flex-row gap-2  overflow-hidden">
            <div className="flex flex-col gap-2 ">
              <div ref={project3Ref}>
                <img
                  src="/images/project2.png"
                  alt="projects"
                  className="w-full h-[270px] object-fill rounded-xl"
                />
                <h3 className="text-base  font-semibold my-5 ">
                  A fullstack e-commerce web application.
                </h3>
              </div>

              <div ref={project4Ref}>
                <img
                  src="/images/project3.jpeg"
                  alt="projects"
                  className="w-full h-[270px] object-fill rounded-xl"
                />
                <h3 className="text-base  font-semibold my-5 ">
                  Cloud Service platform
                </h3>
              </div>
              <div ref={project5Ref}>
                <img
                  src="/images/project4.png"
                  alt="projects"
                  className="w-full h-[270px] object-fill rounded-xl"
                />
                <h3 className="text-base  font-semibold my-5 ">
                  Online Learning Course Platform
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
