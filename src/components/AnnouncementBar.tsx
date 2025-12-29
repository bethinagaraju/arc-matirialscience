

import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const announcements = [
    // "Initial Announcement",
    "First Round of Abstract Submission Closes on January 30, 2026",
    "Early Bird Registration Closes on February 15, 2026",
  ];

  if (!isMobile || isVisible) {
    return (
      <div className="w-full bg-[#f2f4fa] py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4">
          
          {announcements.map((text, index) => {
            const isEarlyBird = text.includes("Early Bird");
            const isAbstract = text.includes("Abstract Submission");

            return (
              <div
                key={index}
                className={`flex items-center gap-2 text-[#053047] text-sm font-medium ${
                  isEarlyBird ? "animate-pulse" : ""
                }`}
              >
                <Bell
                  size={20}
                  className={`text-[#053047] ${isEarlyBird ? "text-red-500" : ""}`}
                />

                {/* Handle Links */}
                {isEarlyBird ? (
                  <Link
                    to="/register"
                    className="underline hover:text-blue-600 transition"
                  >
                    {text}
                  </Link>
                ) : isAbstract ? (
                  <Link
                    to="/AbstractSubmission"
                    className="underline hover:text-blue-600 transition"
                  >
                    {text}
                  </Link>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
