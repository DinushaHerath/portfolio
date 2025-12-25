import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { uom, royal } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, institution, year, details, logo }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="w-full sm:w-[380px] bg-gradient-to-b from-cyan-400/10 to-transparent rounded-3xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
  >
    <div className="bg-black h-24 flex items-center justify-center border-b-2 border-cyan-400/30">
      <img 
        src={logo} 
        alt={institution}
        className="h-16 w-auto object-contain"
      />
    </div>
    
    <div className="p-6 text-center">
      <h3 className="text-white text-[18px] font-bold mb-3 leading-tight">
        {degree}
      </h3>
      
      <p className="text-cyan-400 text-[15px] font-semibold mb-2">
        {institution}
      </p>
      
      <p className="text-secondary text-[14px] mb-3">
        {year}
      </p>
      
      <p className="text-secondary text-[13px] leading-relaxed">
        {details}
      </p>
    </div>
  </motion.div>
);

const About = () => {
  const education = [
    {
      degree: "B.Sc. (Hons) Degree in Information Technology",
      institution: "University of Moratuwa",
      year: "2022 - 2027 (Expected)",
      details: "Faculty of Information Technology",
      logo: uom
    },
    {
      degree: "Royal College Monaragala",
      institution: "Mo/Royal College Monaragala",
      year: "2018 - 2021",
      details: "Successfully completed both GCE Advanced Level (2021) and Ordinary Level (2018) examinations",
      logo: royal
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} glow-text-strong`}>About Me</h2>
      </motion.div>

      <div className='mt-4 flex flex-col lg:flex-row gap-10 items-start lg:items-start'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='flex-1 text-secondary text-[17px] leading-[30px] text-justify'
        >
          <p className='mb-4'>
            I'm Dinusha Herath, an undergraduate at the University of Moratuwa, Faculty of Information Technology,
             currently reading for a BSc (Hons) in Information Technology and Management (expected 2027).
              I'm a passionate full-stack developer who enjoys building practical, user-focused web applications and continuously learning new technologies.
          </p>
          <p className='mb-4'>
            Alongside my technical background, I have a strong interest in the business and management side of technology.
             I enjoy learning how software can solve real business problems, streamline processes, and create value. 
            This combination of IT and management motivates me to build solutions that are both technically strong and business-oriented.
          </p>
          <p className='mb-6'>
            I'm a motivated team player with strong problem-solving and leadership skills, always eager to take on new challenges and grow as a professional. Currently, I am seeking opportunities as a Software Engineer where I can apply my skills, 
            learn from experienced professionals, and contribute to impactful projects.
          </p>
          
          <motion.a
            href="/Dinusha_Herath_CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
          >
            📄 Grab My CV
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='lg:w-[300px] w-full flex-shrink-0 lg:-mt-8'
        >
          <img
            src='/dinu.png'
            alt='Dinusha'
            className='w-full h-auto rounded-2xl object-cover'
          />
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div 
        variants={textVariant()}
        className="mt-20 text-center"
      >
        <h3 className="text-cyan-400 text-[24px] md:text-[28px] font-bold mb-2 glow-text">
          Education
        </h3>
        <p className="text-secondary text-[16px]">
          My academic journey and qualifications that have shaped my expertise in Information Technology
        </p>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-8 justify-center'>
        {education.map((edu, index) => (
          <EducationCard key={edu.institution} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
