import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black-100 border-t border-[#915EFF]/20">
      <div className={`${styles.paddingX} max-w-7xl mx-auto py-8`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section - Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-white font-bold text-[20px]">
              Dinusha <span className="text-[#00d9ff]">Herath</span>
            </h3>
            <p className="text-secondary text-[14px] mt-2">
              Building digital experiences
            </p>
          </motion.div>

          {/* Right Section - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/dinusha-herath-0541b92a7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#0A66C2] transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://github.com/DinushaHerath"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#333] transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://wa.me/0766924832"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/share/1D8RSbwy4D/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300"
            >
              <FaFacebook className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-6 border-t border-[#915EFF]/10"
        >
          <p className="text-secondary text-center text-[12px]">
            © {currentYear} Dinusha Herath. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
