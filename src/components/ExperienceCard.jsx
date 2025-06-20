import {  useRef } from "react";

export const ExperienceCard = ({ exp, index }) => {
  // refs for all the cards
  const cardRefs = useRef([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;
    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="flex card card-border top-[-50px] right-20 relative rounded-xl p-5 mb-3 break-inside-avoid-column xl:w-4/6 justify-end ml-auto"
    >
      <div className="border-light"></div>

      <div className="flex items-start">  
        <div className="flex xl:gap-10 md:gap-6 gap-5 relative z-20">
          <div>
            <h1 className="font-semibold text-3xl">{exp.title}</h1>
            <p className="my-2 text-white-50">🗓️&nbsp;{exp.date}</p>
            <p className="text-[#839CB5] italic">Responsibilities</p>
            <ul className="list-disc ms-5 mt-3 flex flex-col gap-3 text-white-50">
              {exp.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-base">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
