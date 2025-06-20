export const Button = ({ className, text }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("statistics");
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }}
      className={`${className} relative z-20 cursor-pointer`}
    >
      <div className="custom-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};
