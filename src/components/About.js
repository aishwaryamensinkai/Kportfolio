import React from "react";
import { useNavigate } from "react-router-dom";
import about_img from "../assets/karthik.jpeg";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";
import { motion } from "framer-motion";

const About = () => {
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
        <motion.div
          className="m-auto p-20 headingtop"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-thin text-[#9f9f9f]">Discover My Journey</p>
          <h1 className=" text-5xl">About Me</h1>
        </motion.div>
        <div className="lg:w-3/4 max-md:w-full flex m-auto sm:max-lg:flex-col sm:max-lg:text-center sm:max-lg:p-auto max-md:flex-col max-md:text-center max-md:p-auto">
          <motion.img
            src={about_img}
            className="w-1/3 max-md:mb-7 max-md:max-lg:w-1/4 max-md:border-2 max-md:border-[#06C4C8] sm:max-lg:rounded-full sm:max-lg:m-auto sm:max-lg:mt-16 max-md:w-1/3 max-md:border-1 max-md:rounded-full max-md:m-auto"
            alt="Karthik Rudrappa"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="ml-14 max-md:ml-0">
            <motion.div
              className="p-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-[#06C4C8] text-2xl p-2 -mt-5 sm:max-lg:mr-10">
                I'm Karthik Rudrappa,
              </h1>
              <motion.p
                className="text-[#9f9f9f] p-2 text-sm justifyC"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                A dedicated cybersecurity professional with a Master of Science
                in Cybersecurity from Syracuse University and a Bachelor of
                Engineering in Information Science & Engineering from New
                Horizon College. My passion lies in fortifying digital
                landscapes against evolving threats. With a robust skill set
                encompassing incident response, network pen-testing, and threat
                modeling, I leverage my expertise in security tools like
                Burpsuite, NMAP, and Metasploit Framework to ensure
                comprehensive protection. My hands-on experience in managing
                cybersecurity competitions, developing secure software, and
                conducting vulnerability management exemplifies my commitment to
                advancing the field of cybersecurity.
              </motion.p>
              <motion.p
                className="text-[#9f9f9f] p-2 text-sm justifyC"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                I thrive in dynamic environments where collaboration and
                innovation are key. My roles as a Graduate Teaching Assistant
                and Research Assistant at Syracuse University demonstrate my
                ability to lead and inspire others while driving significant
                advancements in cybersecurity education and research. Whether
                orchestrating Capture the Flag competitions or developing
                interactive blockchain-based IoT security solutions, my
                proactive approach and dedication to continuous learning ensure
                I remain at the cutting edge of cybersecurity. My publication
                record and active participation in security clubs underscore my
                enthusiasm for sharing knowledge and contributing to the
                cybersecurity community.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
