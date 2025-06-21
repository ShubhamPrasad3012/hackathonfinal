import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="relative w-32 h-32 flex items-center justify-center">
         
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full border-4 border-cyan-400/30 rounded-full"
        />

         
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-20 h-20 rounded-full border-4 border-purple-500/40 shadow-[0_0_30px_8px_rgba(139,92,246,0.3)]"
        />

         
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
        />
      </div>
    </div>
  );
};

export default Loader;
