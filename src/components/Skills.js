import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const skillsData = {
  "Programming Languages": [
    {
      name: "Python",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "C / C++",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    },
    {
      name: "Java",
      icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      name: "Bash / SHELL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg",
    },
  ],
  Frameworks: [
    {
      name: "Network Pen-testing",
      icon: "https://assets.labs.ine.com/web/badges/low/NETWORK.png",
    },
    {
      name: "Threat Modeling",
      icon: "https://www.threatmodelingmanifesto.org/tm-manifesto-med.svg",
    },
    {
      name: "STRIDE",
      icon: "https://seeklogo.com/images/S/stride-logo-3E6A08B062-seeklogo.com.png",
    },
    {
      name: "OWASP Top 10",
      icon: "https://owasp.org/Top10/assets/TOP_10_logo_Final_Logo_Colour.png",
    },
  ],
  "Front-End and Databases": [
    {
      name: "Bootstrap",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "MySQL",
      icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    },
  ],
  "Operating Systems": [
    {
      name: "Linux Distribution (Ubuntu, Kali, Parrot OS)",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    },
    {
      name: "Windows 10",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg",
    },
    {
      name: "Windows Server Edition",
      icon: "https://banner2.cleanpng.com/20180920/fol/kisspng-windows-server-2-12-logo-organization-brand-windows-server-5ba39cd715d540.3534964615374491750894.jpg",
    },
    {
      name: "Mac OS",
      icon: "https://seeklogo.com/images/A/apple-mac-logo-FB34556F8D-seeklogo.com.png",
    },
  ],
  "Security Tools": [
    {
      name: "Burpsuite",
      icon: "https://banner2.cleanpng.com/20180623/ckx/kisspng-burp-suite-penetration-test-vulnerability-proxy-se-5b2f0dfb900434.1914974615298104275899.jpg",
    },
    {
      name: "NMAP",
      icon: "	https://nmap.org/images/sitelogo-2x.png",
    },
    {
      name: "Metasploit Framework",
      icon: "https://w7.pngwing.com/pngs/122/777/png-transparent-metasploit-project-penetration-test-security-hacker-computer-security-shellcode-ruby-blue-angle-logo.png",
    },
    {
      name: "Wireshark",
      icon: "https://w7.pngwing.com/pngs/708/366/png-transparent-wireshark-packet-analyzer-computer-software-protocol-analyzer-leopard-shark-thumbnail.png",
    },
    {
      name: "QRadar",
      icon: "	https://logodix.com/logo/2040549.jpg",
    },
    {
      name: "Nessus",
      icon: "https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/blog/nessus15thlogo.png",
    },
    {
      name: "Autopsy",
      icon: "https://www.kali.org/tools/autopsy/images/autopsy-logo.svg",
    },
    {
      name: "Splunk",
      icon: "https://w7.pngwing.com/pngs/690/27/png-transparent-splunk-hd-logo-thumbnail.png",
    },
    {
      name: "Volatility",
      icon: "https://asset.brandfetch.io/idL2_nmQU9/idrT1crH-K.jpeg",
    },
    {
      name: "Docker",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    },
    {
      name: "AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "SIFT",
      icon: "https://vtlogo.com/wp-content/uploads/2020/10/sift-vector-logo.png",
    },
    {
      name: "GDB Debugger",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVDXrlKlBMdUkmQJWIbjnQMULu_4eKwFkPw&s",
    },
  ],
};

const Skills = () => {
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
          <p className="text-thin text-[#9f9f9f] text-center">Check out my</p>
          <h1 className="text-5xl pt-3">Skills</h1>
        </div>
        <div className="w-10/12 text-center lg:p-1 m-auto mt-8 cssFix">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-3xl my-6">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-7">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-md shadow-md shadow-[#06C4C8] hover:scale-105 duration-300 flex justify-center align-middle"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="my-4 w-6 h-6"
                    />
                    <p className="my-4 mx-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
