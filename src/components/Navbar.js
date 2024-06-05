import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";
import Logo from "./Logo";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <div className="bg-transparent text-center flex ">
      <Logo />
      <div
        onClick={() => setMenuIcon(!menuIcon)}
        className="absolute right-8 top-8 cursor-pointer md:hidden"
      >
        {menuIcon ? (
          <CloseIcon sx={{ color: "white", fontSize: "40px" }} />
        ) : (
          <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
        )}
      </div>
      <ul
        className={`text-white absolute right-0 md:flex md:item-center md:pb-5 md:top-4 max-md:bg-[#191919] md:z-auto max-md:z-30 z-[-1] w-screen md:w-auto md:pl-0 lg:pl-9 transition-all duration-500 ease-in ${
          menuIcon ? "top-20 opacity-100" : "hidden"
        }  md:opacity-100 font-semibold z-40 tracking-widest`}
      >
        <li className="p-6 max-md:p-3  ">
          <Link
            to="/about"
            className="hover:text-[#06C4C8] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#06C4C8] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100"
          >
            ABOUT
          </Link>
        </li>
        <li className="p-6 max-md:p-2 ">
          <Link
            to="/eduexp"
            className="hover:text-[#06C4C8] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#06C4C8] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  "
          >
            EDU / EXP
          </Link>
        </li>
        <li className="p-6 max-md:p-2 ">
          <Link
            to="/skills"
            className="hover:text-[#06C4C8] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#06C4C8] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  "
          >
            SKILLS
          </Link>
        </li>
        <li className="p-6 max-md:p-2 ">
          <Link
            to="/project"
            className="hover:text-[#06C4C8] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#06C4C8] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  "
          >
            PROJECT
          </Link>
        </li>
        <li className="p-6  max-md:p-2  ">
          <Link
            to="/links"
            className="hover:text-[#06C4C8] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#06C4C8] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100 "
          >
            LINKS
          </Link>
        </li>
        <li className="p-6 max-md:p-2 ">
          <Link
            to="/contact"
            className="hover:text-[#06C4C8] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#06C4C8] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  "
          >
            CONTACT
          </Link>
        </li>
        <li className="p-6 max-md:p-2 ">
          <button className="shadow-md shadow-[#06C4C8] hover:bg-[#101010] hover:scale-100 hover:shadow-lg duration-300  text-white font-bold py-1 px-2 mx-7 -mt-2 rounded-full ">
            <a
              target="_blank"
              className="text-[#06C4C8] text-sm font-semibold "
              href="https://kenni001.github.io/Terminal_Portfolio/"
              rel="noreferrer"
            >
              Terminal Portfolio
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
