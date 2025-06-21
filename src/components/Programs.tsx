import React from 'react';
import { Shield, Code, BarChart3, Database, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Orbs from './Orbs';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Master ethical hacking, network security, and threat analysis with real-world simulations.",
      color: "from-rose-500 via-red-500 to-orange-500",
      glow: "shadow-red-500/20",
      features: ["Penetration Testing", "Security Auditing", "Incident Response", "Risk Assessment"]
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Build modern web applications using cutting-edge frameworks and technologies.",
      color: "from-blue-500 via-cyan-500 to-teal-400",
      glow: "shadow-cyan-400/20",
      features: ["React & Node.js", "Database Design", "API Development", "DevOps Practices"]
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Extract insights from complex datasets using machine learning and statistical analysis.",
      color: "from-emerald-500 via-green-500 to-lime-400",
      glow: "shadow-green-400/20",
      features: ["Machine Learning", "Python & R", "Statistical Analysis", "Data Visualization"]
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Transform raw data into actionable business intelligence and strategic insights.",
      color: "from-purple-500 via-pink-500 to-fuchsia-500",
      glow: "shadow-fuchsia-400/20",
      features: ["SQL & NoSQL", "Business Intelligence", "Reporting Tools", "Data Mining"]
    }
  ];

  return (
    <section id="programs" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      <Orbs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Our Programs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform into a future-ready tech professional through hands-on, immersive internship experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className={`relative bg-white/5 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 ${program.glow}`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                <program.icon className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{program.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center text-gray-300 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute -bottom-2 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/0 blur-3xl pointer-events-none animate-ping" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
