import React from "react";
import { motion } from "framer-motion";

const EarthCss = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 via-green-300 to-blue-600 shadow-2xl shadow-blue-500/50">
          {/* Ocean patterns */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-blue-500/30 to-transparent" />
          
          {/* Land masses (simplified) */}
          <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-green-600/40 rounded-full blur-sm" />
          <div className="absolute top-1/3 right-1/4 w-20 h-16 bg-green-700/40 rounded-full blur-sm" />
          <div className="absolute bottom-1/3 left-1/3 w-24 h-14 bg-green-600/40 rounded-full blur-sm" />
          
          {/* Clouds */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute top-1/4 left-1/2 w-12 h-8 bg-white/20 rounded-full blur-md" />
            <div className="absolute top-2/3 left-1/4 w-16 h-10 bg-white/20 rounded-full blur-md" />
            <div className="absolute top-1/2 right-1/4 w-14 h-8 bg-white/20 rounded-full blur-md" />
          </motion.div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
        
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full blur-xl bg-blue-400/20 -z-10 scale-110" />
      </motion.div>
    </div>
  );
};

export default EarthCss;
