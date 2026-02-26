import React from 'react';
import { Phone, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            संपर्क करें{' '}
            <span className="text-orange-600 font-light">(Contact)</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to us for any queries related to registration, schemes, or
            our social welfare programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

            <h3 className="text-2xl font-bold text-gray-800 mb-8 relative z-10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                <Phone size={18} />
              </span>
              Get In Touch
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-colors group/item hover:bg-white hover:shadow-md">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm text-orange-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Phone Numbers
                  </h4>
                  <div className="text-gray-600 font-medium grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    <a
                      href="tel:+919528845669"
                      className="hover:text-orange-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      +91 9528845669
                    </a>
                    <a
                      href="tel:8930180065"
                      className="hover:text-orange-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      8930180065
                    </a>
                    <a
                      href="tel:9050516834"
                      className="hover:text-orange-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      9050516834
                    </a>
                    <a
                      href="tel:9996199089"
                      className="hover:text-orange-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      9996199089
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-colors group/item hover:bg-white hover:shadow-md">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm text-orange-600 flex items-center justify-center flex-shrink-0 group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Office Address
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Sarvsamajkalyansevatrust
                    <br />
                    Head Office, Muzaffarnagar
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-8 md:p-12 text-white relative overflow-hidden border border-gray-700 hover:shadow-2xl transition-all duration-300">
            <div className="absolute -right-16 -top-16 text-gray-800 opacity-40 mix-blend-overlay">
              <ShieldCheck size={280} />
            </div>

            <div className="flex items-center gap-4 mb-8 relative z-10 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shadow-inner">
                <AlertTriangle size={24} />
              </div>
              <div>
                <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-1">
                  Legal Disclaimer
                </span>
                <h3 className="text-2xl font-bold">Important Rules</h3>
              </div>
            </div>

            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold shadow-sm">
                  1
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white block mb-1">
                    Lucky Draw Final:
                  </strong>{' '}
                  The lucky draw result will be conducted online and its result
                  will be final & binding.
                </p>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold shadow-sm">
                  2
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white block mb-1">
                    Prize Acceptance:
                  </strong>{' '}
                  Whatever prize opens in the lucky draw must be accepted by the
                  winner.
                </p>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold shadow-sm">
                  3
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white block mb-1">
                    No Liability:
                  </strong>{' '}
                  The Trust holds no responsibility for the item/vehicle after
                  the prize distribution.
                </p>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold shadow-sm">
                  4
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white block mb-1">
                    Non-Refundable:
                  </strong>{' '}
                  The ₹5100 entry fee is strictly non-refundable under any
                  circumstances.
                </p>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-gray-700/50 relative z-10 text-center">
              <p className="text-sm text-gray-400 italic bg-gray-900/50 inline-block px-4 py-2 rounded-full border border-gray-800">
                * By participating, you agree to all terms & conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
