import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, MapPin, Clock } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Now serving 20+ major cities
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Fastest <span className="text-blue-600">Delivery</span> in your city.
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Quicker is the local logistics app for all your intra-city delivery needs. Book bikes, trucks, or vans in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetStarted}
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                Send a Package
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                Track Order
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-slate-900">60min</span>
                <span className="text-sm text-slate-500 font-medium">Avg Delivery</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-slate-900">5M+</span>
                <span className="text-sm text-slate-500 font-medium">Deliveries</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-slate-900">4.9/5</span>
                <span className="text-sm text-slate-500 font-medium">User Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b11a4c-2a57-424d-926c-640ca6d15d9c/hero-background-0e78c41e-1774600099781.webp" 
                alt="Quicker Logistics" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Estimated Time</p>
                  <p className="text-lg font-black text-slate-900">22 Mins</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20">
               <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b11a4c-2a57-424d-926c-640ca6d15d9c/rider-hero-34c0b6af-1774600105899.webp" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                      alt="Rider"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Sameer is nearby!</p>
                    <p className="text-xs text-slate-500">Pickup in 2 minutes</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};