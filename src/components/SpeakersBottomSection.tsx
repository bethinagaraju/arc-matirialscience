import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2 } from 'lucide-react';

function SpeakersBottomSection() {
  return (
    <div className="py-12 bg-gradient-to-r from-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Share Your Research?
          </h2>
          <p className="text-indigo-200 mb-8 leading-relaxed">
            Join our distinguished speakers and present your groundbreaking work at ICAMLR 2026.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/AbstractSubmission">
              <button className="bg-white text-indigo-900 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                <Mic2 className="w-5 h-5" />
                Submit Abstract
              </button>
            </Link>
            <Link to="/call-for-papers">
              <button className="bg-transparent border-2 border-indigo-400 text-indigo-100 font-semibold py-4 px-8 rounded-full hover:bg-indigo-800 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>




    </div>
  );
}

export default SpeakersBottomSection;