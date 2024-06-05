import CloseIcon from "@mui/icons-material/Close";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import { useNavigate, Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "./Logo";
const Project = () => {
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
      <div className="flex align-middle justify-center flex-col">
        <div className="m-auto p-20 headingtop">
          <p className="text-thin text-[#9f9f9f]">Check out My Projects</p>
          <h1 className=" text-5xl mt-3">Projects</h1>
        </div>
        <div className="flex flex-wrap m-auto sm:max-lg:flex-col sm:max-lg:text-center max-md:flex-col max-md:text-center max-md:mb-4">
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">Terminal Portfolio</h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Terminal_Portfolio">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                  <Link to="https://kenni001.github.io/Terminal_Portfolio/">
                    <LanguageSharpIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">Github Readme</h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Kenni001">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                  <Link to="https://github.com/Kenni001">
                    <LanguageSharpIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">
                IOT Security Management using Blockchain
              </h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/IOT-Security-Management-using-Blockchain">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap m-auto sm:max-lg:flex-col sm:max-lg:text-center max-md:flex-col max-md:text-center max-md:mb-4">
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">
                Cryptocurrencies Price Prediction
              </h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Cryptocurrencies-Price-Prediction">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">Voice Assistant</h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Voice-Assistant">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">
                Advanced Encryption Standard{" "}
              </h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Advanced-Encryption-Standard-AES">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap m-auto sm:max-lg:flex-col sm:max-lg:text-center max-md:flex-col max-md:text-center max-md:mb-4">
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">Data Encryption Standard </h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Data-Encryption-Standard-DES">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">Image Stenography</h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Image_stenography">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="bg-[#1f1e1e] rounded-md lg:m-4 w-96 max-md:mt-4">
            <div className="p-3 w-full">
              <h1 className="lg:text-2xl px-2">
                Advanced Encryption Standard{" "}
              </h1>
              <ul className="flex text-sm text-[#06C4C8] max-md:justify-center">
                <li className="p-2">
                  <Link to="https://github.com/Kenni001/Advanced-Encryption-Standard-AES">
                    <GitHubIcon
                      sx={{ color: "#06C4C8", fontSize: "35px" }}
                      className=" hover:scale-125 m-4"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Project;
