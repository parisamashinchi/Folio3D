import { Button } from "../components/ui/Button";
import { TopBannerWords } from "../constant/index";
import { TopBanner } from "../components/topBannerModels/TopBanner"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AnimatedStatistics } from "../components/AnimatedStatistics";

export const TopBannerSection = () => {
  useGSAP(() => {
        gsap.fromTo('.TopBanner-text h3' ,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.5
            }
        )
    })
  return (
    <section id="topBanner" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="TopBanner-layout ">
        <header className="flex flex-col xl:max-w-[40%]  md:px-20 px-5 ">
          <div className="flex flex-col gap-6">
            <div className="TopBanner-text">
              <h3>
                Transforming
                <span className="slide-text">
                  <span className="wrapper-text">
                    {TopBannerWords.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-2 pb-3"
                      >
                        <img
                          src={word.icon}
                          alt={word.text}
                          className="rounded-full xl:size-7 md:size-8 size-7 p-1 bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h3>
              <h3>Into Real Projects</h3>
              <h3> For Real-World Use</h3>
            </div>
          
          <p className="text-white-50 md:text-2xl text-l font-light mt-4">
            Hi, I’m Parisa — a frontend developer who turns complex ideas into
            beautiful, functional web experiences.
          </p>
          <Button text="my projects" className="md:h-14 h-12 md:w-70 w-50" />
          </div>
        </header>
        <figure className="TopBanner-3d-layout flex flex-col items-center xl:mt-48">
            <TopBanner/>
        </figure> 
      </div>
      <AnimatedStatistics />
    </section>
  );
};
