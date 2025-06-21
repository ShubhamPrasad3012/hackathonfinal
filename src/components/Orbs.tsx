import React from "react";
import { motion } from "framer-motion";

const Orbs = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none perspective-[1200px]">
       
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-purple-700 to-transparent opacity-30 shadow-[0_0_60px_10px_rgba(99,102,241,0.4)]"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 80, 0],
          rotateY: [0, 180, 360],
          rotateX: [0, 45, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#f472b6,_#facc15,_transparent)] opacity-20 shadow-[0_0_80px_15px_rgba(236,72,153,0.3)]"
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 100, -100, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "5%" }}
      />

       
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-[radial-gradient(circle,_#22d3ee,_#6366f1,_transparent)] opacity-25 shadow-[0_0_60px_10px_rgba(14,165,233,0.3)]"
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -50, 50, 0],
          rotateZ: [0, -360],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", left: "15%" }}
      />
    </div>
  );
};

export default Orbs;
