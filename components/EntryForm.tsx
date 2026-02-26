'use client';

import React, { useState } from 'react';
import { Upload, Send, CheckCircle } from 'lucide-react';

export default function EntryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('amount', '5100');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert(
          'Failed to submit form. Please check your network and try again.',
        );
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section
      id="register"
      className="py-20 lg:py-28 bg-orange-600 relative overflow-hidden scroll-mt-20"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pattern-grid font-bold"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 hidden md:block"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <span className="bg-white/20 inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm border border-white/30">
            Join The Movement
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Register Now & <br />
            <span className="text-yellow-300">Win Big</span>
          </h2>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-sm border-l-4 border-yellow-400 pl-4">
            Fill the form to participate in the lucky draw and support the
            social cause of poor girls' marriage.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl max-w-sm mx-auto lg:mx-0">
            <div className="flex items-center gap-4 mb-3 text-white">
              <CheckCircle className="text-yellow-400" size={24} />
              <span className="font-bold text-lg">Entry Fee: ₹5100</span>
            </div>
            <p className="text-orange-100 text-sm">
              Upload payment screenshot for successful registration.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-center h-full animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Registration Submitted!
                </h3>
                <p className="text-gray-600">
                  Your entry has been received. Our team will verify the payment
                  and get back to you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                    placeholder="+91 xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows={2}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none resize-none"
                    placeholder="Enter full address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      जमा राशि (Amount) *
                    </label>
                    <input
                      type="text"
                      readOnly
                      value="₹5100"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-600 font-bold focus:outline-none cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Referral Member
                    </label>
                    <input
                      type="text"
                      name="referral"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Payment Screenshot *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="screenshot"
                      required
                      onChange={handleFileChange}
                      className="hidden"
                      id="screenshot-upload"
                      accept="image/*"
                    />
                    <label
                      htmlFor="screenshot-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-orange-50 border border-orange-200 border-dashed rounded-xl cursor-pointer hover:bg-orange-100 transition-colors text-orange-600 font-medium"
                    >
                      <Upload size={20} />
                      {fileName ? fileName : 'Upload Receipt/Screenshot'}
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-xl transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 transform hover:-translate-y-1 hover:shadow-2xl'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      Processing...
                    </span>
                  ) : (
                    <>
                      <Send size={20} /> Submit Registration
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
