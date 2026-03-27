import React, { useState } from 'react';
import { Menu, X, Package, Bike, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (tab: 'home' | 'order' | 'rider') => void;
  activeTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', icon: Package },
    { name: 'Order Now', id: 'order', icon: Bike },
    { name: 'Become a Rider', id: 'rider', icon: ShieldCheck },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 overflow-hidden rounded-xl flex items-center justify-center">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b11a4c-2a57-424d-926c-640ca6d15d9c/app-logo-a05f6685-1774600099568.webp" 
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">Quicker</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as any)}
                className={`text-sm font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </button>
            ))}
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 px-4 py-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id as any);
                  setIsOpen(false);
                }}
                className={`text-lg font-bold flex items-center gap-4 p-3 rounded-xl ${
                  activeTab === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <link.icon className="w-6 h-6" />
                {link.name}
              </button>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <button className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold text-lg">
              Sign In / Sign Up
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};