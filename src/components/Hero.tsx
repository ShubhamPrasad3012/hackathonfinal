import { ChevronRight, BadgeCheck, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import Orbs from './Orbs';
import CardSwap, { Card } from './CardSwap';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900/80 backdrop-blur-2xl text-white pt-24 md:pt-0"
>
 
      <Orbs />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-16 w-72 h-72 bg-cyan-400/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-16 right-12 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[200px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/10 via-purple-600/10 to-pink-400/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      </div>
 
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[25%] left-[20%] w-16 h-16 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-2xl shadow-xl shadow-cyan-500/30"
        />
        <motion.div
          animate={{ y: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[70%] right-[25%] w-14 h-14 bg-gradient-to-tr from-pink-500 to-indigo-500 rounded-full shadow-xl shadow-pink-500/20"
        />
        <motion.div
          animate={{ y: [0, -8, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[50%] left-[65%] w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl shadow-xl shadow-blue-500/20"
        />
      </div>
 
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 animate-fade-in">
 
        <div className="flex-1 text-center lg:text-left space-y-12">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(137,207,240,0.5)]">
              Tech Career
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Immersive internship programs in Cybersecurity, Full Stack Development,
            Data Science, and Data Analysis — built for tomorrow’s innovators.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('programs')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg shadow-md shadow-cyan-400/30 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Programs
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 rounded-xl border border-white/10 blur-[2px] animate-pulse pointer-events-none"></span>
            </button>

            <button
              onClick={() => scrollToSection('verify')}
              className="relative px-8 py-4 border-2 border-slate-500 rounded-xl font-semibold text-lg hover:border-cyan-400 hover:text-cyan-300 transition duration-300"
            >
              Verify Certificate
              <span className="absolute inset-0 rounded-xl border border-white/5 blur-[1px] animate-flicker pointer-events-none"></span>
            </button>
          </motion.div>
 
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 opacity-90">
            {[{ icon: BadgeCheck, label: 'Certified Programs' }, { icon: Flame, label: 'High-Paying Skills' }].map(
              ({ icon: Icon, label }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 shadow shadow-blue-400/20 backdrop-blur-md"
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-gray-300">{label}</span>
                </motion.div>
              )
            )}
          </div>
        </div>
 
        <div className="flex-1 flex justify-center items-center relative min-h-[200px] md:min-h-[550px]">
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <div className="h-full w-full bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 rounded-xl p-6 text-white shadow-xl flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Data Science</h3>
          <p className="text-sm leading-relaxed">
            Dive into machine learning, statistical analysis, Python, and real-world data projects. Create predictive models using real-world datasets.
          </p>
        </div>
        <span className="text-xs text-white/70 mt-4">Level: Intermediate - Advanced</span>
      </div>
    </Card>

    <Card>
      <div className="h-full w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-xl p-6 text-white shadow-xl flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Cybersecurity</h3>
          <p className="text-sm leading-relaxed">
            Learn ethical hacking, penetration testing, and cyber defense techniques. Train in real scenarios using tools like Kali Linux, Wireshark, and Burp Suite.
          </p>
        </div>
        <span className="text-xs text-white/70 mt-4">Level: Beginner - Advanced</span>
      </div>
    </Card>

    <Card>
      <div className="h-full w-full bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 rounded-xl p-6 text-white shadow-xl flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Full Stack Development</h3>
          <p className="text-sm leading-relaxed">
            Master both frontend and backend: HTML, CSS, React, Node.js, MongoDB, and REST APIs. Build, deploy, and scale real-world web apps with modern tools.
          </p>
        </div>
        <span className="text-xs text-white/70 mt-4">Level: All Levels</span>
      </div>
    </Card>
  </CardSwap>
</div>

      </div>
    </section>
  );
};

export default Hero;
