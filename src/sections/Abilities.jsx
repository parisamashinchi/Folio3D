import { abilities } from "../constant/index";

const Abilities = () => (
  <div className="w-full px-5 md:px-20">
    <div className="mx-auto  gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
      {abilities.map(({ img, title, desc }) => (
        <div
          key={title}
          className="border border-black-50 bg-black-100 rounded-xl p-4 xl:p-8 flex xl:flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={img} alt={title} />
          </div>
          <div>
            <h3 className="text-white text-xl xl:text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-base xl:text-lg">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Abilities;
