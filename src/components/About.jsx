import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-4 flex flex-col lg:flex-row gap-10 items-start'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='flex-1 text-secondary text-[17px] leading-[30px]'
        >
          <p className='mb-4'>
            I’m Dinusha Herath, an undergraduate at the University of Moratuwa, Faculty of Information Technology,
             currently reading for a BSc (Hons) in Information Technology and Management (expected 2027).
              I’m a passionate full-stack developer who enjoys building practical, user-focused web applications and continuously learning new technologies.
          </p>
          <p className='mb-4'>
            Alongside my technical background, I have a strong interest in the business and management side of technology.
             I enjoy learning how software can solve real business problems, streamline processes, and create value. 
            This combination of IT and management motivates me to build solutions that are both technically strong and business-oriented.
          </p>
          <p>
            I’m a motivated team player with strong problem-solving and leadership skills, always eager to take on new challenges and grow as a professional. Currently, I am seeking opportunities as a Software Engineer where I can apply my skills, 
            learn from experienced professionals, and contribute to impactful projects.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='lg:w-[300px] w-full'
        >
          <img
            src='/dinu.png'
            alt='Dinusha'
            className='w-full h-auto rounded-2xl object-cover'
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
