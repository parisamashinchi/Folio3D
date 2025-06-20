import { useEffect, useState } from "react";
import { NavLinks } from "../constant/index";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        isScrolled ? "bg-black" : "md:top-10 bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <a
          href="#topBanner"
          className="text-white-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-110"
        >
          Parisa Mashinchi
        </a>

        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {NavLinks.map(({ link, name }) => (
              <li key={name} className="text-white-50 relative group">
                <a href={link}>
                  <span className="transition-colors duration-300 hover:text-white ">
                    {name}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
