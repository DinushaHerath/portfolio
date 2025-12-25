import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaGithub, FaFacebook } from "react-icons/fa";

import { styles } from "../styles";
import dinu from "../assets/dinu.png";
import cvPDF from "./Dinusha Herath.pdf";

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/dinusha-herath-0541b92a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: FaWhatsapp, url: "https://wa.me/0766924832", label: "WhatsApp" },
    { icon: FaGithub, url: "https://github.com/DinushaHerath", label: "GitHub" },
    { icon: FaFacebook, url: "https://www.facebook.com/share/1D8RSbwy4D/", label: "Facebook" },
  ];

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${dinu})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Social Media Icons - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00d9ff] transition-all duration-300 
                       drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] 
                       hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.9)]
                       hover:scale-110"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            aria-label={social.label}
          >
            <social.icon size={28} />
          </motion.a>
        ))}
      </div>
      
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00d9ff]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00d9ff] to-transparent' />
        </div>

        <div>
          <h1 className="font-serif font-black text-[#00d9ff] glow-text-strong md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Hi, I'm Dinusha
          </h1>
          <p className="font-sans text-white font-medium text-[20px] md:text-[24px] mt-4 leading-relaxed">
            An undergraduate
            <br className='sm:block hidden' /> in Information Technology & Management  <br className='sm:block hidden' />
            at the University of Moratuwa.
          </p>
        </div>
      </div>
      
      {/* CV Button - Lower position - Aligned with text */}
      <div className={`absolute xs:bottom-16 bottom-24 max-w-7xl mx-auto ${styles.paddingX} z-20`}>
        <div className='ml-[120px]'>{/* Offset for the circle and line width (5px circle + 1px line + some gap) */}
          <motion.a
            href={cvPDF}
            download="Dinusha_Herath_CV.pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 rounded-full text-white font-semibold hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            📄 Grab My CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
