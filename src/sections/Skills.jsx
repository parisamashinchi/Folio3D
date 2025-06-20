import {HeadTitle} from "../components/HeadTitle";
import {skillsIcons} from "../constant/index";
import {SkillModel} from "../components/skillModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Skills = () => {
   //  Animate the skill cards in the skills section. This animation is triggered when the user scrolls to the #skills wrapper
  useGSAP(()=>{
    gsap.fromTo(".skill-card",{
      opacity:0,
      y:50
    },{
      opacity:1,
      y:0,
      duration:2,
      stagger:0.1,
      ease: "power2.out",
      scrollTrigger:{
        trigger: "#skills",
        start: "top center",
      }
    })
  })
  return (
    <div id="skills" className="flex-center px-5 md:px-10 md:mt-40 mt-20">
      <div className="w-full h-full md:px-20 px-5">
        <HeadTitle
          title="My Expertise & Core Strengths"
          subTitle="💼 The Strengths I Offer as a Developer"
        />
        <div className="skill-grid">
          {skillsIcons.map((skillIcon) => (
            <div
              key={skillIcon.name}
              className="card-border skill-card overflow-hidden group xl:rounded-full rounded-lg "
            >
          
              <div className="skill-card-animated-bg  " />
              <div className="skill-card-content  cursor-none">
            
                <div className="skill-icon-wrapper">
                  {skillIcon.modelPath
                    ? <SkillModel model={skillIcon} />
                    : <img
                        src={skillIcon.imgPath}
                        alt={skillIcon.name}
                        width="100px"
                        className=" object-cover"
                      />
                  }
                </div>
                <div className="padding-x w-full  ">
                  <p>{skillIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};
