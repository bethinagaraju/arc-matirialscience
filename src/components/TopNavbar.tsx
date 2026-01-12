import React from "react";
import { useState } from "react";
import { Calendar, Globe, MapPin, Menu, Monitor, X } from "lucide-react";
import { Link } from "react-router-dom";

const TopNavbar = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) => {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 h-[90px] sm:h-[120px] flex items-center justify-between">
        {/* Left Section */}
        <div className="flex h-full items-center divide-x divide-gray-200">
          {/* Logo */}
          <div className="h-full flex items-center">
            <Link to="/" title="Go to AIMLR 2026 Home Page" aria-label="AIMLR 2026 Home Page">
              <img
                src="aimllogo.jpg"
                alt="Artificial Intelligence, Machine Learning and Robotics Conference Logo"
                className="h-[70px] sm:h-[120px] w-auto object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Event Details (visible on sm and up) */}
          <div className="pl-4 sm:pl-6 flex-col space-y-1 sm:space-y-2 text-[11px] sm:text-sm text-gray-800 min-w-[180px] sm:min-w-[200px] flex">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Calendar className="text-indigo-900" size={16} />
              <span className="font-bold tracking-tight sm:text-sm">
                July 28–30, 2026
              </span>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <MapPin className="text-indigo-900" size={16} />
              <span className="font-bold tracking-tight sm:text-sm leading-snug">
                Crowne Plaza - St. Peter’s Rome, Italy
              </span>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
  <div className="flex items-center justify-center space-x-1">
    {/* <MapPin className="text-indigo-900" size={16} /> */}
    {/* <Monitor className="text-indigo-900" size={16} /> */}
    <Globe className="text-indigo-900" size={16} />
  </div>
  <span className="font-semibold tracking-tight sm:text-sm leading-snug text-indigo-900">
    Hybrid Event: In-Person & Virtual Participation
  </span>
</div>

          </div>
        </div>

        {/* Right Section (desktop buttons) */}
        <div className="hidden md:flex items-center gap-4 ml-12">
          <Link to="/register" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
            <button 
              // style={{ backgroundImage: "linear-gradient(90deg, rgba(201, 171, 99, 0.92) 0%, rgba(201, 171, 99, 0.92) 39%, rgba(201, 171, 99, 0.5) 100%, rgba(201, 171, 99, 0.93) 65%)" }} 
              className="bg-[#C9AB63] w-[120px] text-white font-bold py-2 hover:bg-[#425a92] transition-colors duration-300"
              title="Register for AIMLR 2026 Conference"
              aria-label="Register for AIMLR 2026 Conference"
            >
              REGISTER
            </button>
          </Link>

          <Link to="/AbstractSubmission" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
            <button 
              style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }} 
              className="w-[232px] text-white font-bold py-2 hover:bg-[#011136] transition-colors duration-300"
              title="Submit Abstract for AIMLR 2026 Conference"
              aria-label="Submit Abstract for AIMLR 2026 Conference"
            >
              ABSTRACT SUBMISSION
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-3">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label={menuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}
            title={menuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;