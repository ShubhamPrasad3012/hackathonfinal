import React, { useRef, useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollY: number;
  scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollY,
  scrollToSection,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
 
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (navRef.current) {
        const bounds = navRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - bounds.left);
        mouseY.set(e.clientY - bounds.top);
      }
    };
    const node = navRef.current;
    if (node) {
      node.addEventListener('mousemove', move);
      node.addEventListener('mouseenter', () => setHovered(true));
      node.addEventListener('mouseleave', () => setHovered(false));
    }
    return () => {
      node?.removeEventListener('mousemove', move);
      node?.removeEventListener('mouseenter', () => setHovered(true));
      node?.removeEventListener('mouseleave', () => setHovered(false));
    };
  }, [mouseX, mouseY]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'verify', label: 'Verify Certificate' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition duration-300 overflow-hidden ${
        scrollY > 50
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    > 
      {hovered && (
        <motion.div
          className="absolute z-0 w-40 h-40 bg-cyan-400/20 blur-2xl rounded-full pointer-events-none"
          style={{
            left: springX,
            top: springY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
 
          <motion.div
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Inlighn Tech
            </span>
          </motion.div>
 
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                className={`relative font-medium transition duration-200 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 rounded-full ${
                    activeSection === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </motion.button>
            ))}
          </div>
 
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-full"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>
 
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 overflow-hidden"
      >
        <div className="flex flex-col space-y-2 p-4">
          {navItems.map((item) => (
            <motion.button
  key={item.id}
  onClick={() => {
    setIsMenuOpen(false);
    setTimeout(() => scrollToSection(item.id), 100); 
  }}
  whileHover={{
    scale: 1.05,
    color: '#22D3EE',
    textShadow: '0px 0px 8px rgba(34,211,238,0.8)',
  }}
  whileTap={{ scale: 0.95 }}
  className={`text-left w-full px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
  }`}
>
  {item.label}
</motion.button>

          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
