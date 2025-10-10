import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div
      className={`h-20 fixed w-full flex items-center justify-around transition-colors duration-300 z-50
        ${scrolled ? "bg-white shadow-xl " : "bg-transparent h-32 ease-out"}`}
    >
      <div>
        <h1
          className={`text-3xl font-semibold transition-colors duration-300 select-none`}
          style={{ color: scrolled ? "black" : "white" }}
        >
          Tic Tac
        </h1>
      </div>
      <ul className="flex gap-20">
        <li
          className=" hover:shadow-inner hover:shadow-gray-200  hover:underline select-none decoration-3 font-semibold text-white text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"

          style={{ color: scrolled ? "black" : "white" }}
        >
          Home
        </li>
        <li
          className="hover:shadow-inner hover:shadow-gray-200  hover:underline select-none decoration-3  font-semibold text-white text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"
          style={{ color: scrolled ? "black" : "white" }}
        >
          About
        </li>
        <li
          className="hover:shadow-inner hover:shadow-gray-200   hover:underline select-none decoration-3  font-semibold text-white text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"
          style={{ color: scrolled ? "black" : "white" }}
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
}
