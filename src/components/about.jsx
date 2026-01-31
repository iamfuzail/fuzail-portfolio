import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


const journey = [
  {
    role: "Full Stack Developer",
    company: "Nagarro",
    skill: "Web Apps • APIs • System Design",
  },
  {
    role: "Data Analyst Intern",
    company: "IIRS – ISRO",
    skill: "Hyperspectral Data • Analytics • Research",
  },
  {
    role: "Sales & Communication",
    company: "upGrad",
    skill: "Client Handling • Persuasion • Growth",
  },
  {
    role: "AI/ML + Software & Marketing",
    company: "Jio Platforms Limited",
    skill: "AI Tools • Automation • Product & Growth",
  },
];

import reactLogo from "../assets/tech/react.svg";
import angularLogo from "../assets/tech/angular.svg";
import nodedotjsLogo from "../assets/tech/nodedotjs.svg";
import pythonLogo from "../assets/tech/python.svg";
import tailwindLogo from "../assets/tech/tailwindcss.svg";
import jioLogo from "../assets/tech/jio.svg";
import n8nLogo from "../assets/tech/n8n.svg";
import githubLogo from "../assets/tech/github.svg";
import gitforwindowsLogo from "../assets/tech/gitforwindows.svg";
import isroLogo from "../assets/tech/isro.svg";
import cplusplusLogo from "../assets/tech/cplusplus.svg";

const techStack = [
  angularLogo,
  reactLogo,
  nodedotjsLogo,
  pythonLogo,
  tailwindLogo,
  jioLogo,
  n8nLogo,
  githubLogo,
  gitforwindowsLogo,
  isroLogo,
  cplusplusLogo
];
const scrollingStack = [...techStack, ...techStack];
const isMobile = window.innerWidth < 768;

const marqueeSpeed = isMobile ? 45 : 28;


export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-5 sm:px-8 md:px-20 py-16 md:py-20 "
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        About <span className="text-orange-500">Me</span>
      </motion.h2>

      <p className="text-gray-400 max-w-3xl mb-12 leading-relaxed">
        Full-stack developer with enterprise experience at Nagarro, data analytics
        background from ISRO (IIRS), communication expertise from upGrad, and
        currently building AI-powered digital products at Jio Platforms Limited.
        I blend code, data, design, and automation to create products that don’t
        just work, they perform.
      </p>
       <p className="text-orange-500 font-medium mb-10">
        • Full Stack   • AI/ML   • Product Thinking   • Growth Engineering
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {journey.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#111] p-6 rounded-2xl border border-gray-800 
                       hover:border-orange-500/50 hover:shadow-orange-500/20 hover:shadow-xl transition"
          >
            <h3 className="text-lg font-semibold mb-1">
              {item.role}
            </h3>
            <p className="text-orange-500 text-sm mb-2">
              {item.company}
            </p>
            <p className="text-gray-400 text-sm">
              {item.skill}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 overflow-hidden relative">

        {/* fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0px", "-1200px"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: window.innerWidth < 768 ? 45 : 25,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {scrollingStack.map((logo, i) => (
            <div
              key={i}
              className="w-28 h-20 flex items-center justify-center flex-shrink-0 group"
            >
              <img
                src={logo}
                className="max-h-16 object-contain transition
                     group-hover:scale-110
                     group-hover:drop-shadow-[0_0_18px_rgba(249,115,22,0.6)]"
              />
            </div>
          ))}
        </motion.div>

      </div>



    </section>
  );
}
