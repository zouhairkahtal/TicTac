import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      if (mobileOpen) setMobileOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const linkClass = (isActive: boolean) =>
    isActive
      ? "text-yellow-500 font-bold"
      : `${scrolled ? "text-black" : "text-white"} hover:text-gray-300`;

  return (
    <div
      className={`fixed w-full  flex items-center justify-around max-[1250px]:justify-between px-6 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-xl h-24" : "bg-transparent h-32"
      }`}
    >
      {/* Logo */}
      <h1
        className="text-3xl font-semibold select-none transition-colors duration-300"
        style={{ color: scrolled ? "black" : "white" }}
      >
        Tic Tac
      </h1>

      {/* Desktop Menu */}
      <div>
        <ul className="hidden md:flex gap-8">
          <li className="text-lg">
            <NavLink to="/HomePage" className={({ isActive }) => linkClass(isActive)}>
              Home
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/AboutPage" className={({ isActive }) => linkClass(isActive)}>
              About
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/contactUs" className={({ isActive }) => linkClass(isActive)}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hidden max-[767px]:block hover:underline hover:shadow-inner hover:shadow-gray-200 select-none py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"
          style={{ color: scrolled ? "black" : "white" }}
        >
          <svg
            style={{ fill: scrolled ? "black" : "white" }}
            className="w-10 h-10"
            viewBox="0 -2 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
              <path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
              <path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
            </g>
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-0 right-0 w-2/4 h-screen bg-white flex flex-col items-center md:hidden z-50">
          <button
            className="w-full h-20 flex items-center text-3xl justify-end pr-8"
            onClick={() => setMobileOpen(false)}
          >
            ✖
          </button>

          <ul className="w-full h-80 flex flex-col justify-center items-center gap-y-14 text-xl">
            <li>
              <NavLink to="/HomePage" className={({ isActive }) => linkClass(isActive)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutPage" className={({ isActive }) => linkClass(isActive)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" className={({ isActive }) => linkClass(isActive)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
