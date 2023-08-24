import Logo from "@/assets/logo.svg";
import { links } from "@/data/links";
import {
  faBars,
  faRightToBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="w-full h-20 bg-white border-b-2 border-black">
      {/* large screen menu */}
      <div className="md:max-w-[1480px] max-w-[600px] md:m-auto md:px-0 px-2 w-full h-full flex justify-between items-center">
        <img src={Logo} height={200} width={200} />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-1">
            {links.map((link) => (
              <li
                key={link.id}
                className="hover:cursor-pointer hover:scale-110 rounded-lg h-10 w-20 flex items-center justify-center hover:bg-sky-600/30 transition-all duration-200"
              >
                {link.title}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-3 ml-5">
            <button className="flex items-center justify-between gap-2 bg-transparent px-6 rounded-md border border-emerald-600">
              <FontAwesomeIcon icon={faRightToBracket} className="mt-1" />{" "}
              Connexion
            </button>
            <button className="px-8 py-3 rounded-md border-transparent border bg-emerald-600 text-white font-bold hover:text-emerald-600 hover:bg-white hover:border-emerald-600">
              Inscription gratuite
            </button>
          </div>
        </div>
        <div className="md:hidden" onClick={handleToggle}>
          <FontAwesomeIcon icon={toggle ? faXmark : faBars} />
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          toggle
            ? "absolute mt-1 z-10 rounded-xl p-4 bg-white shadow-md h-fit w-full md:hidden"
            : "hidden"
        }
      >
        <ul>
          {links.map((link) => (
            <li
              key={link.id}
              className="p-2 hover:cursor-pointer hover:bg-sky-600/30"
            >
              {link.title}
            </li>
          ))}
          <div className="flex flex-col my-4 gap-4">
            <button className="flex items-center justify-center gap-2 bg-transparent px-6 py-2 rounded-md border border-emerald-600">
              <FontAwesomeIcon icon={faRightToBracket} className="mt-1" />{" "}
              Connexion
            </button>
            <button className="px-8 py-3 rounded-md bg-emerald-600 text-white font-bold hover:text-emerald-600 hover:bg-white hover:border-emerald-600 hover:border-2">
              Inscription gratuite
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
