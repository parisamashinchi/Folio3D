import { HeadTitle } from "../components/HeadTitle";
import { experiences } from "../constant/index";
import { ExperienceCard } from "../components/experienceCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        transformOrigin: "left left",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    // Animate the timeline height as the user scroll
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        // from 1 to 0 as the user scrolls up the screen
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  });
  return (
    <section
      id="experience"
      className="flex-center px-5 md:px-10 xl:px-0 md:mt-40 mt-20 "
    >
      <div className="w-full h-full md:px-20 px-5">
        <HeadTitle
          title="Professional Experience"
          subTitle="💼 Career Highlights & Roles"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-10 space-y-7">
            {experiences.map((exp, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col-reverse xl:flex-row xl:gap-10 gap-5 justify-between"
                >
                  <div className="absolute top-0 xl:w-2/6 md:left-10 left-5 h-full flex z-[-1]">
                    <div className="timeline absolute z-30 h-[110%] -top-10 w-14 md:w-28 bg-black" />
                    <div className="gradient-line w-1 h-full" />
                  </div>
                  <div className=" md:size-20 size-10   md:-translate-y-7 border border-black-50 bg-black-100">
                    <img
                      src={exp.logoPath}
                      alt="logo"
                      className="rounded-full"
                    />
                  </div>

                  <ExperienceCard exp={exp} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
