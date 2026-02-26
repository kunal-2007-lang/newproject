import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-orange-600 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-5 -z-0 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-orange-600/30">
              S
            </span>
            Sarvsamajkalyansevatrust
          </h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-400">
            A registered charitable trust dedicated to social welfare,
            supporting poor families, organizing prize distribution programs,
            and helping in poor girls' marriages.
          </p>
          <div className="inline-block bg-gray-800 text-gray-300 font-mono text-xs px-3 py-1.5 rounded border border-gray-700 font-medium tracking-wide">
            Reg No: <span className="text-white">MUZ/8976/2026</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider text-sm border-b border-gray-800 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                <span className="text-orange-600">›</span> About Trust
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                <span className="text-orange-600">›</span> How It Works
              </a>
            </li>
            <li>
              <a
                href="#prizes"
                className="hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                <span className="text-orange-600">›</span> Prize Categories
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                <span className="text-orange-600">›</span> Register Now
              </a>
            </li>
            <li>
              <a
                href="#welfare"
                className="hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                <span className="text-orange-600">›</span> Social Welfare
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider text-sm border-b border-gray-800 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3">
              <Phone
                size={18}
                className="text-orange-600 mt-0.5 flex-shrink-0"
              />
              <div className="flex flex-col gap-1 text-gray-400 hover:text-gray-300 transition-colors">
                <span>+91 9528845669, 8930180065</span>
                <span>9050516834, 9996199089</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-orange-600 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-400 leading-relaxed hover:text-gray-300 transition-colors">
                Head Office, Muzaffarnagar
                <br />
                UP, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-gray-500 text-sm font-medium">
          &copy; 2026 Sarvsamajkalyansevatrust. All Rights Reserved.
        </p>
        <p className="text-gray-500 text-sm font-medium flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-full">
          Made with{' '}
          <Heart
            size={14}
            className="text-red-500 animate-pulse"
            fill="currentColor"
          />{' '}
          for Social Welfare
        </p>
      </div>
    </footer>
  );
}
