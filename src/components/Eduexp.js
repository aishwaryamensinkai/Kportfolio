import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
const Eduexp = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div
      className="text-white animate-fade"
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
      <div className="flex flex-col align-middle justify-center">
        <div className="m-auto p-20 headingtop">
          <p className="text-thin text-[rgb(159,159,159)] text-center">
            Check out My
          </p>
          <h1 className="text-5xl pt-3">Education & Experience</h1>
        </div>
        <div className="flex align-middle justify-center max-md:flex-col m-auto">
          {/* Education */}
          <div className=" lg:pr-20" style={{ textAlign: "justify" }}>
            <h1 className="text-2xl mb-5 text-[#06C4C8]">Education</h1>
            <div className="card w-[500px] max-lg:w-[335px] box-border  bg-[#161616] relative lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8  border-b border-l-[#06C4C8] border-l-2">
              <span className="before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#06C4C8]"></span>
              <h1 className=" inline text-xl">
                Syracuse University - College of Engineering & Computer Science
              </h1>
              <p className="text-[rgb(159,159,159)] text-base pb-2 pt-2 ">
                Syracuse, NY{" "}
                <span className="text-[13px]">(August 2022 – May 2024)</span>
              </p>
              <p className="text-[#9f9f9f] text-[13px] pb-2">
                <i>Master of Science in Cybersecurity</i>
              </p>
              <p className="text-[#9f9f9f] text-[13px] pb-2">
                Relevant Coursework: Computer Security, Information security,
                Security Tools for Information Security, Cryptography,
                Biometrics, Cyber Law and Policy, Cloud management, Testing and
                Building of Secure Software, IOT Application and Security,
                Blockchain.{" "}
              </p>
            </div>
            <div className="max-lg:w-[335px] w-[500px] bg-[#161616] relative border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#06C4C8] border-l-2">
              <span className="before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#06C4C8]"></span>
              <h1 className="inline text-xl">
                New Horizon – College of Information Science and Engineering
              </h1>
              <p className="text-[#9f9f9f] text-base pb-2 pt-2">
                Bangalore, IN{" "}
                <span className="text-[13px]">(July 2018 – July 2022)</span>
              </p>
              <p className="text-[#9f9f9f] text-[13px] pb-2">
                <i>
                  Bachelor of Engineering in Information Science & Engineering
                </i>
              </p>
              <p className="text-[#9f9f9f] text-[13px]">
                Relevant Coursework: Python, Cryptography, Computer Networks and
                Security, Data Structures and Algorithms, Object Oriented
                Design, Cloud Computing and security.{" "}
              </p>
            </div>
          </div>
          {/* Experience */}
          <div className="max-sm:mt-4 pl-20 max-lg:pl-5 max-sm:pl-0">
            <h1 className="text-2xl mb-5 text-[#06C4C8]">Experience</h1>
            <div className="max-lg:w-[335px] w-[500px] relative bg-[#161616] border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#06C4C8] border-l-2">
              <span className="before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#06C4C8] "></span>
              <h1 className="inline text-xl">
                Graduate Teaching Assistant, Syracuse University
              </h1>
              <p className="text-[#9f9f9f] text-base pb-2 pt-2">
                Syracuse, NY (June 2023 – August 2023)
              </p>
              <ul className="list-disc text-[#9f9f9f] text-[12px]">
                <li>
                  <p>
                    Led interactive cybersecurity workshops, boosting student
                    comprehension and skill development by 20% through hands-on
                    sessions for 50+ participants.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Managed a Capture the Flag (CTF) competition, galvanizing
                    over 100 students to collaborate and apply cybersecurity
                    principles in real-time challenges, fostering teamwork and
                    practical expertise.
                  </p>
                </li>
                <li>
                  <p>
                    Directed a team of 10 students to secure network defenses in
                    the Cyber Collegiate Defense Competition (CCDC), securing
                    the top position among 20 participating groups through
                    strategic planning and execution.
                  </p>
                </li>
              </ul>
            </div>
            <div className="max-lg:w-[335px] w-[500px] relative bg-[#161616] border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#06C4C8] border-l-2">
              <span className="before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#06C4C8]"></span>
              <h1 className="inline text-xl">
                Graduate Research Assistant, Syracuse University
              </h1>
              <p className="text-[#9f9f9f] text-base pb-2 pt-2">
                Syracuse, NY (January 2023 – May 2023)
              </p>
              <ul className="list-disc text-[#9f9f9f] text-[12px]">
                <li>
                  <p>
                    Coordinated the rapid development of the SEED Lab internet
                    emulator using Python, Flask, and Docker, creating a 30+
                    Ethereum node network supporting real-world Ether
                    transactions and wallet creation.
                  </p>
                </li>
                <li>
                  <p>
                    Architected an interactive UI with HTML,CSS,and
                    JavaScript,integrated MetaMask for Ethereum
                    management,improving UX,and enabling real- time data
                    streaming with Web Sockets and multi-threading.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented RESTful APIs with Flask and optimized data
                    storage using SQL Alchemy, increasing performance and
                    scalability while storing data in a SQLite3 database.
                  </p>
                </li>
              </ul>
            </div>
            <div className="max-lg:w-[335px] w-[500px] relative bg-[#161616] border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#06C4C8] border-l-2">
              <span className="before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#06C4C8]"></span>
              <h1 className="inline text-xl">
                Software Developer, The Sparks Foundation
              </h1>
              <p className="text-[#9f9f9f] text-base pb-2 pt-2">
                Bangalore, IN (June 2021 – September 2021)
              </p>
              <ul className="list-disc text-[#9f9f9f] text-[12px]">
                <li>
                  <p>
                    Pioneered the integration of cutting-edge front-end
                    frameworks, driving a 20% boost in website responsiveness
                    and slashing load times by 15% for enhanced user experience.
                  </p>
                </li>
                <li>
                  <p>
                    Revolutionized project workflows by implementing Agile
                    methodologies, catalyzing a 30% reduction in project
                    delivery time, and fostering greater efficiency in software
                    development processes.
                  </p>
                </li>
                <li>
                  <p>
                    Conducted meticulous code reviews, detecting and rectifying
                    95% of bugs pre-deployment, guaranteeing a flawless user
                    experience and elevating product quality standards.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eduexp;
