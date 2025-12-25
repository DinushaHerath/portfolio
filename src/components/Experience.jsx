import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { 
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, 
  FaLaravel, FaFigma, FaGitAlt, FaPhp, FaDatabase, FaCode 
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, 
  SiMysql, SiAdobeillustrator, SiAdobephotoshop,
  SiCplusplus, SiGimp, SiThreedotjs
} from "react-icons/si";

const CodeBackground = () => {
  const codeSymbols = ['{', '}', '<', '>', '/', '(', ')', ';', '=', '+', '-', '*', '...', '&&', '||', '=>'];
  
  return (
    <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-10">
      {codeSymbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400 font-mono text-2xl"
          initial={{ 
            x: Math.random() * 400,
            y: Math.random() * 800,
            opacity: 0.3
          }}
          animate={{
            y: [Math.random() * 800, -100],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

const SkillCard = ({ name, icon: Icon, color, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.5)}
    className="group relative"
  >
    <div className="relative bg-tertiary rounded-2xl p-4 flex flex-col items-center gap-3 
                    border border-white/10 hover:border-cyan-400/50 
                    shadow-lg hover:shadow-cyan-400/20
                    transition-all duration-300 hover:scale-110 hover:-translate-y-1
                    min-w-[100px]">
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black-200/50">
        <Icon className="w-10 h-10" style={{ color }} />
      </div>
      <p className="text-white text-[12px] text-center font-medium leading-tight">
        {name}
      </p>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div
    variants={fadeIn("right", "spring", delay, 0.75)}
    className="mb-10"
  >
    <h3 className="text-cyan-400 text-[20px] md:text-[24px] font-bold mb-6 
                   border-b-2 border-cyan-400/50 pb-2 inline-block
                   glow-text">
      {title}
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} {...skill} index={index} />
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "C", icon: SiCplusplus, color: "#00599C" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "PHP", icon: FaPhp, color: "#777BB4" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "React Native", icon: FaReact, color: "#61DAFB" },
        { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
        { name: "Express.js", icon: FaNodeJs, color: "#000000" },
          
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MSSQL", icon: FaDatabase, color: "#CC2927" },
       
      ],
    },
    {
      title: "UI/UX & Design",
      skills: [
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "GIMP", icon: SiGimp, color: "#5C5543" },
      ],
    },
    {
      title: "IDEs & Tools",
      skills: [
        { name: "VS Code", icon: FaCode, color: "#007ACC" },
        { name: "Code::Blocks", icon: FaCode, color: "#00599C" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
      
      ],
    },
  ];

  return (
    <div className="relative">
      <CodeBackground />
      
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I'm proficient in
        </p>
        <h2 className={`${styles.sectionHeadText} text-center glow-text-strong`}>
          Technical Skills.
        </h2>
      </motion.div>

      <div className="mt-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
