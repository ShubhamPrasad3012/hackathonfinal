import React, { useEffect, useRef } from 'react';
import { Award, Users, BookOpen, Globe } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Orbs from './Orbs';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const About: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const features = [
    { icon: Award, text: "Industry-certified programs with real-world projects" },
    { icon: Users, text: "Expert mentorship from seasoned professionals" },
    { icon: BookOpen, text: "Comprehensive curriculum updated with latest trends" },
    { icon: Globe, text: "Global networking opportunities and career support" }
  ];

  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      <Orbs />

      {/* 🔵 Cursor Glow */}
      <div
        ref={cursorRef}
        className="fixed z-50 w-10 h-10 rounded-full bg-cyan-400/20 backdrop-blur pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            About Inlighn Tech
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering immersive tech education through hands-on experiences, mentorship, and future-forward curriculums.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          {/* 🚀 Features */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white underline decoration-cyan-500 underline-offset-4">
              Why Choose Inlighn Tech?
            </h3>

            <div className="space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="flex items-center space-x-4 group"
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareEnable
                    glareMaxOpacity={0.3}
                    scale={1.08}
                    className="transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </Tilt>
                  <p className="text-gray-300 text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 📊 Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} custom={index}>
                <Tilt
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  scale={1.05}
                  glareEnable
                  glareMaxOpacity={0.2}
                  transitionSpeed={400}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-slate-700 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
