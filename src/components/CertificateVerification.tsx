import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Orbs from './Orbs';

const CertificateVerification: React.FC = () => {
  const [certificateId, setCertificateId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verifying certificate:", certificateId);
  };

  return (
    <section id="verify" className="relative py-24 bg-gradient-to-br from-slate-900 to-black overflow-hidden">
      <Orbs />
 
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 blur-3xl opacity-30"
        animate={{ y: [0, -20, 20, 0], rotate: [0, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{ left: "35%", top: "50%" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
  className="text-4xl sm:text-5xl font-extrabold text-center leading-tight mb-6"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <span className="block sm:inline bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
    Verify
  </span>{' '}
  <span className="block sm:inline bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent underline decoration-wavy underline-offset-[6px] decoration-green-400">
    Certificate
  </span>
</motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Enter your certificate ID to confirm the authenticity of your Inlighn Tech certification.
          </motion.p>
        </div>
 
        <motion.div
          className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-slate-700 shadow-[0_0_60px_0_rgba(0,255,255,0.1)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
           
          <motion.div
  className="mx-auto mt-[-0.5rem] h-[3px] w-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md animate-pulse"
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  style={{ transformOrigin: "center" }}
/>


          <form onSubmit={handleSubmit} className="space-y-8">
             
            <div>
              <label
                htmlFor="certificateId"
                className="block text-sm font-medium text-cyan-300 mb-2"
              >
                Certificate ID
              </label>
              <motion.input
                type="text"
                id="certificateId"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="e.g., ILT-2024-CS-001"
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.3)",
                }}
                className="w-full px-4 py-3 bg-slate-900/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

           
            <motion.button
              type="submit"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl text-white font-bold text-lg tracking-wide shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Verify Certificate  
            </motion.button>
          </form>

         
          <div className="mt-10 bg-slate-900/50 border border-slate-700 rounded-xl p-6 shadow-inner">
            <h4 className="text-lg text-white font-semibold mb-3 underline underline-offset-4 decoration-fuchsia-500">How to find your Certificate ID:</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Check your completion email from Inlighn Tech.",
                "Look at the bottom of your digital certificate.",
                "Contact support if you need assistance.",
              ].map((tip, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  {tip}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );  
};

export default CertificateVerification;
