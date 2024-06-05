import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";
import about_img from "../assets/karthik.jpeg";
import github from "../assets/skills/github.png";
import linkedin from "../assets/skills/linkedin.png";
import medium from "../assets/skills/medium.png";

import Logo from "./Logo";
const Links = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div
      className="text-white box-border animate-fade"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <Logo />
      <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 closetop">
        <button
          onClick={backHome}
          className="after:border-2 after:border-[#06C4C8] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1"
        >
          <CloseIcon sx={{ fontSize: "38px", color: "#06C4C8" }} />
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col max-md:pt-12">
        <div className="lg:w-3/4 w-full flex m-auto flex-col text-center p-auto p-5">
          <div className="m-auto w-full mt-16">
            <img
              src={about_img}
              className="w-[8.5%] max-md:w-24 rounded-full m-auto"
              alt="Karthik Rudrappa"
            />
            <h1 className="p-3">Karthik Rudrappa</h1>
            <p className="text-[#ffffff99] max-md:text-sm">
              Coding enthusiast and Web Developer
            </p>
          </div>
          <div className="m-auto w-1/2 max-md:w-full p-3">
            <Link to="https://github.com/Kenni001" target="_blank">
              <div className="bg-[#222222] flex h-14 p-1 rounded-xl  mt-5 cursor-pointer hover:scale-105 transition ease-out">
                <img
                  src={github}
                  alt="logo"
                  className="w-12 p-1 rounded-lg absolute"
                />
                <h1 className="m-auto">GitHub</h1>
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/in/karthik-rudrappa/"
              target="_blank"
            >
              <div className="bg-[#222222] flex h-14 p-1 rounded-xl  mt-5 cursor-pointer hover:scale-105 transition ease-out">
                <img
                  src={linkedin}
                  alt="logo"
                  className="w-12 rounded-lg absolute"
                />
                <h1 className="m-auto font-extralight">Linkedin</h1>
              </div>
            </Link>
            <Link to="https://medium.com/@kennikarthik" target="_blank">
              <div className="bg-[#222222] flex h-14 p-1 rounded-xl  mt-5 cursor-pointer hover:scale-105 transition ease-out">
                <img
                  src={medium}
                  alt="logo"
                  className="w-12 rounded-lg absolute"
                />
                <h1 className="m-auto font-extralight">Medium</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Links;
