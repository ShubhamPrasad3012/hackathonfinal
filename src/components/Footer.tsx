import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';
import Orbs from './Orbs';

const Footer: React.FC = () => {
  const programLinks = [
    { name: 'Cybersecurity', href: '#' },
    { name: 'Full Stack Dev', href: '#' },
    { name: 'Data Science', href: '#' },
    { name: 'Data Analysis', href: '#' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-2xl border-t border-slate-800 py-20 overflow-hidden">
      <Orbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-12 items-center text-center md:items-start md:text-left">

          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-600/30">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Inlighn Tech
              </h1>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Empowering the next generation of tech professionals through immersive, hands-on learning experiences in cutting-edge technologies.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4 relative underline underline-offset-8 decoration-blue-500">Programs</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative group inline-block transition-all duration-300 hover:text-cyan-400"
                  >
                    {link.name}
                    <span className="block h-0.5 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4 relative underline underline-offset-8 decoration-purple-500">Company</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="relative group inline-block transition-all duration-300 hover:text-fuchsia-400"
                  >
                    {link.name}
                    <span className="block h-0.5 w-0 bg-fuchsia-400 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-gray-400"
        >
          &copy; 2024 Inlighn Tech. All rights reserved. Designed for the future of tech education.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
