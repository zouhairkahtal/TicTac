import { useEffect, useState } from "react";

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

  return (
    <div
      className={`fixed w-full z-50 flex items-center justify-around max-[1250px]:justify-between px-6 transition-colors duration-300 ${
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
          <li
            className="hover:underline hover:shadow-inner hover:shadow-gray-200 select-none font-semibold text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"
            style={{ color: scrolled ? "black" : "white" }}
          >
            Home
          </li>
          <li
            className="hover:underline hover:shadow-inner hover:shadow-gray-200 select-none font-semibold text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"
            style={{ color: scrolled ? "black" : "white" }}
          >
            About
          </li>
          <li
            className="hover:underline hover:shadow-inner hover:shadow-gray-200 select-none font-semibold text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"
            style={{ color: scrolled ? "black" : "white" }}
          >
            Contact Us
          </li>
        </ul>
        <div
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hidden max-[767px]:block hover:underline hover:shadow-inner hover:shadow-gray-200 select-none   py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer"
          style={{ color: scrolled ? "black" : "white" }}
        >
          <svg
            style={{ fill: scrolled ? "black" : "white" }}
            className=" w-10 h-10"
            width="64px"
            height="64px"
            viewBox="0 -2 28 28"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
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
        <div className="fixed top-0 right-0 w-2/4 h-screen bg-white flex flex-col items-center  md:hidden z-50">
          <button
            className=" w-full h-20 flex items-center text-3xl justify-end pr-8"
            onClick={() => setMobileOpen(false)}
            onScroll={()=>setMobileOpen(false)}
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </button>

          <ul className="w-full h-80 flex flex-col justify-center items-center gap-y-14 text-xl">
            <li className="hover:underline hover:shadow-inner hover:shadow-gray-200 select-none font-semibold text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer">Home </li>
            <li className="hover:underline hover:shadow-inner hover:shadow-gray-200 select-none font-semibold text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer">About</li>
            <li className="hover:underline hover:shadow-inner hover:shadow-gray-200 select-none font-semibold text-xl py-2 px-4 rounded-lg transition duration-300 ease-in-out cursor-pointer">Contact US</li>
          </ul>
        </div>
      )}
    </div>
  );
}
