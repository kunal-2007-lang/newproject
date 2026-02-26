import React from 'react';
import { Phone } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-orange-600 text-white py-2 px-4 text-sm font-medium z-50 relative">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg tracking-wider">
            || श्री राधे ||
          </span>
          <span className="hidden md:inline-block italic opacity-90">
            "अगर आप में दम है तो मौका देंगे हम"
          </span>
        </div>
        <div className="flex items-center gap-4 lg:gap-6 flex-wrap justify-center">
          <span className="bg-orange-700 px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-orange-500">
            Reg No: MUZ/8976/2026
          </span>
          <div className="flex items-center gap-2 text-xs lg:text-sm">
            <Phone size={14} className="animate-pulse" />
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span>+91 9528845669</span>
              <span>8930180065</span>
              <span className="hidden lg:inline">9050516834</span>
              <span className="hidden lg:inline">9996199089</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
