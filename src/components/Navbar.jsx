import React from "react";
import img from "../assets/logo1.jpg";

function Navbar(props) {
  return (
    <>
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8 lg:py-8 bg-navcolor shadow-2xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a href="#">
              <img
                className="h-10 lg:h-20 rounded-md"
                viewBox="0 0 28 24"
                fill="none"
                src={img}
              ></img>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm lg:text-2xl">
                <li>
                  <a
                    className="text-Tcolor transition hover:text-Tcolor/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-Tcolor transition hover:text-Tcolor/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-Tcolor transition hover:text-Tcolor/75"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-Tcolor transition hover:text-Tcolor/75"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-Tcolor transition hover:text-Tcolor/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-Tcolor transition hover:text-Tcolor/75"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="block md:hidden">
              <button className="rounded bg-Tcolor p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
