import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { intec,fittune,pm,enigma,futuro} from "../assets";

const HighlightCard = ({ title, subtitle, description, image, index, fullDescription, onSeeMore }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative w-full h-[380px] rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="text-white text-[18px] font-bold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-cyan-400 text-[14px] font-semibold mb-2 line-clamp-1">
          {subtitle}
        </p>
        <p className="text-secondary text-[12px] leading-relaxed line-clamp-2 mb-3">
          {description}
        </p>
        <button
          onClick={onSeeMore}
          className="w-full py-2 px-4 bg-gradient-to-r from-cyan-400/20 to-transparent border border-cyan-400/50 rounded-lg text-cyan-400 text-[13px] font-medium hover:bg-cyan-400/30 hover:border-cyan-400 transition-all"
        >
          See More
        </button>
      </div>
      
      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-2xl transition-all duration-300" />
    </motion.div>
  );
};

const HighlightModal = ({ highlight, onClose }) => {
  if (!highlight) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-tertiary rounded-2xl max-w-xl w-full border-2 border-cyan-400/30 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-2xl z-10 transition-all hover:scale-110"
        >
          ×
        </button>

        <div className="p-6">
          <div className="relative w-full h-[220px] mb-4 rounded-xl overflow-hidden">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-cyan-400 text-[22px] font-bold mb-2">
            {highlight.title}
          </h2>

          <p className="text-white text-[16px] font-semibold mb-3">
            {highlight.subtitle}
          </p>

          <p className="text-secondary text-[14px] leading-[24px] mb-4">
            {highlight.fullDescription || highlight.description}
          </p>
          
          {highlight.showSocials && (
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.tiktok.com/@enigma7549?_r=1&_t=ZS-92V8k1RVn0b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400/20 to-purple-400/20 border-2 border-pink-400/50 rounded-full text-white text-[13px] font-semibold hover:border-pink-400 hover:shadow-lg hover:shadow-pink-400/50 transition-all"
              >
                <FaTiktok className="w-4 h-4" />
                TikTok
              </a>
              <a
                href="https://www.facebook.com/share/1Bvmxdfhne/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border-2 border-blue-400/50 rounded-full text-white text-[13px] font-semibold hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/50 transition-all"
              >
                <FaFacebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Highlights = () => {
  const [selectedHighlight, setSelectedHighlight] = useState(null);

  const highlights = [
    {
      title: "Pearlmatrix Solutions",
      subtitle: "Intern – Junior Software Engineer | Nov 2023 – May 2024",
      fullDescription: "Worked as a Junior Software Engineer Intern at Pearlmatrix Solutions, primarily focusing on frontend web development under senior mentorship. Gained hands-on industry experience in building responsive user interfaces, improving UI/UX quality, and supporting projects through content creation and design, contributing to both technical and creative aspects of product development.",
      image: pm
    },
    {
      title: "INTEC Design Committee",
      subtitle: "Design Team Member | CFIT Future Careers 2025",
      fullDescription: " Served as a Design Committee Member of INTEC, contributing to the CFIT Future Careers 2025 event by designing visually engaging digital and promotional materials. Played a key role in maintaining consistent branding, enhancing audience engagement, and delivering creative design solutions aligned with the event’s professional and future-focused vision.",
      image: intec
    },
    {
      title: "Design Committee –FUTURO 2025",
      subtitle: "IEEE Student Branch, University of Moratuwa",
      fullDescription: " Actively contributed as a Design Committee Member for FUTURO 2025, organized by the IEEE Student Branch, University of Moratuwa. Focused on crafting innovative visual designs, event branding assets, and digital content",
      image: futuro
    },
    {
      title: "FIT Tune – University of Moratuwa",
      subtitle: "Member | Vocalist & Music Enthusiast",
      fullDescription: "An active member of FIT Tune, the official music society of the Faculty of IT, University of Moratuwa, where I contribute as a vocalist driven by a deep passion for music. Through performances and collaborative musical activities, I actively engage in enhancing campus cultural life while developing creativity, confidence, and teamwork beyond academics.",
      image: fittune
    },
    
    
    {
      title: "Entrepreneurial Experience",
      subtitle: "Founder | Enigma Artificial Flower Bouquet Business",
      fullDescription: "Founder of Enigma, a small-scale artificial flower bouquet preparation business driven by a strong passion for business and management. Actively apply theoretical knowledge gained from university management modules—including planning, marketing, cost management, and customer relations—into real-world practice, strengthening my entrepreneurial mindset and leadership skills.",
      image: enigma,
      showSocials: true
    }
  
  ];

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Key achievements and roles</p>
        <h2 className={`${styles.sectionHeadText} glow-text-strong`}>My Highlights.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        Key achievements,roles, and notable experiences that showcase my involvement 
        in the tech community and contributions to various events and initiatives.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {highlights.map((highlight, index) => (
          <HighlightCard 
            key={`highlight-${index}`} 
            index={index} 
            {...highlight} 
            onSeeMore={() => setSelectedHighlight(highlight)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedHighlight && (
          <HighlightModal
            highlight={selectedHighlight}
            onClose={() => setSelectedHighlight(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Highlights, "highlights");
