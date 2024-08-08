import React from "react";
import { ABOUT_TEXT } from "../Constants/datas";
import about from "../assets/about.png";
import { motion } from "framer-motion";

const About = ({lightmode}) => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <section id="about">
      <motion.h2 initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8, delay:1}}  className={lightmode?"text-center my-20 text-white text-4xl":"text-center my-20 text-black text-4xl"}>About Me</motion.h2>
      </section>
      <div className="flex flex-wrap">
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={about} alt="" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="flex justify-center lg:justify-start">
              <p className={lightmode?"my-2 tracking-tight py-6 max-w-xl text-white":"my-2 tracking-tight py-6 max-w-xl text-black"}>{ABOUT_TEXT}</p>
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default About;
