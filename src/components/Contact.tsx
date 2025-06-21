import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Orbs from './Orbs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", content: "info@inlighntech.com", subContent: "We'll respond within 24 hours" },
    { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567", subContent: "Mon-Fri 9AM-6PM EST" },
    { icon: MapPin, title: "Visit Us", content: "123 Tech Hub Street", subContent: "San Francisco, CA 94105" }
  ];

  return (
    
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900 to-black overflow-hidden">
      <Orbs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h2 className="text-5xl font-extrabold mb-4 text-white">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your futuristic journey starts here. Reach out and let’s build something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 space-y-6 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <FloatingLabelInput label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                <FloatingLabelInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              </div>
              <FloatingLabelInput label="Email Address" name="email" value={formData.email} onChange={handleInputChange} type="email" />
              <FloatingSelect name="program" value={formData.program} onChange={handleInputChange} />
              <FloatingTextarea name="message" value={formData.message} onChange={handleInputChange} />
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform duration-300 text-white">
                ✉️ Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}>
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05 }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-600 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                    <p className="text-cyan-300 mb-1">{contact.content}</p>
                    <p className="text-sm text-gray-300">{contact.subContent}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingLabelInput = ({ label, name, value, onChange, type = 'text' }: any) => (
  <div className="relative w-full">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
      placeholder={label}
      autoComplete="off"
    />
    <label
      htmlFor={name}
      className="absolute left-4 top-2 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
    >
      {label}
    </label>
  </div>
);


const FloatingSelect = ({ name, value, onChange }: any) => (
  <div className="relative">
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="peer w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
      <option className='text-black'  value="">Select a program</option>
      <option className='text-black' value="cybersecurity">Cybersecurity</option>
      <option className='text-black' value="fullstack">Full Stack Development</option>
      <option className='text-black' value="datascience">Data Science</option>
      <option className='text-black' value="dataanalysis">Data Analysis</option>
    </select>
    
  </div>
);

const FloatingTextarea = ({ name, value, onChange }: any) => (
  <div className="relative w-full">
    <textarea
      name={name}
      id={name}
      rows={4}
      value={value}
      onChange={onChange}
      placeholder="Your message"
      className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
    />
    <label
      htmlFor={name}
      className="absolute left-4 top-2 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
    >
      Message
    </label>
  </div>
);


export default Contact;
