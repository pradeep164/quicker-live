import React from 'react';
import { Package, Globe, Share2, MessageCircle, Briefcase, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d1b11a4c-2a57-424d-926c-640ca6d15d9c/app-logo-a05f6685-1774600099568.webp" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Quicker</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Simplifying logistics for billions. The fastest, most reliable intra-city delivery app built for businesses and individuals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Local Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Truck Rental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Packers & Movers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Logistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Courier Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rider Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>1800-QUICKER (1234)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>support@quicker.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-sm font-bold text-white mb-4">Download Our App</p>
              <div className="flex flex-col gap-3">
                <button className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
                  App Store
                </button>
                <button className="bg-slate-800 text-white px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-700 transition-all">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Quicker Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};