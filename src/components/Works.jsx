import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-tertiary rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border-2 border-cyan-400/30 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl z-10 transition-all hover:scale-110"
        >
          ×
        </button>

        <div className="p-6">
          <div className="relative w-full h-[280px] mb-5 rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-cyan-400 text-[26px] font-bold mb-3 glow-text">
            {project.name}
          </h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1 rounded-full text-[12px] font-medium border ${tag.color}`}
                style={{ borderColor: tag.color.replace('text-', '') }}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <p className="text-secondary text-[15px] leading-[26px] mb-5 text-justify">
            {project.description}
          </p>
          
          {project.paragraphs && project.paragraphs.length > 0 && (
            <div className="space-y-4 mb-5">
              {project.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-secondary text-[14px] leading-[24px] text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border-2 border-cyan-400/50 rounded-full text-white text-[14px] font-semibold hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
            >
              <img src={github} alt="github" className="w-5 h-5" />
              GitHub
            </button>
            {project.linkedin_link && (
              <button
                onClick={() => window.open(project.linkedin_link, "_blank")}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-400/20 to-purple-400/20 border-2 border-blue-400/50 rounded-full text-white text-[14px] font-semibold hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/50 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </button>
            )}
            {project.live_link && (
              <button
                onClick={() => window.open(project.live_link, "_blank")}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border-2 border-green-400/50 rounded-full text-white text-[14px] font-semibold hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 transition-all"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onViewMore,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-grow'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <button
          onClick={onViewMore}
          className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-cyan-400/10 to-transparent border border-cyan-400/50 rounded-lg text-cyan-400 font-medium hover:bg-cyan-400/20 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-400/30"
        >
          View More
        </button>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} glow-text-strong`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 relative'>
        <button
          onClick={() => {
            const container = document.getElementById('projects-container');
            container.scrollBy({ left: -400, behavior: 'smooth' });
          }}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-cyan-400/20 hover:bg-cyan-400/40 border-2 border-cyan-400/50 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110'
        >
          ←
        </button>
        <button
          onClick={() => {
            const container = document.getElementById('projects-container');
            container.scrollBy({ left: 400, behavior: 'smooth' });
          }}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-cyan-400/20 hover:bg-cyan-400/40 border-2 border-cyan-400/50 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110'
        >
          →
        </button>
        <div id='projects-container' className='overflow-x-auto pb-6 scrollbar-hide px-14'>
          <div className='flex gap-7 min-w-max'>
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`} 
                index={index} 
                {...project}
                onViewMore={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");
