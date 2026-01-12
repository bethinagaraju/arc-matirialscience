
import React, { useState, useRef, useEffect } from "react";
import { Home, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavbar = ({ menuOpen, setMenuOpen, headerRef }: { menuOpen: boolean, setMenuOpen: (open: boolean) => void, headerRef: React.RefObject<HTMLDivElement> }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [conferenceOpen, setConferenceOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [callsOpen, setCallsOpen] = useState(false);
  const clickOutsideRef = useRef<((event: MouseEvent) => void) | null>(null);

  useEffect(() => {
    if (!menuOpen) {
      if (clickOutsideRef.current) {
        document.removeEventListener('mousedown', clickOutsideRef.current);
        clickOutsideRef.current = null;
      }
      return;
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    clickOutsideRef.current = handleClickOutside;
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timer);
      if (clickOutsideRef.current) {
        document.removeEventListener('mousedown', clickOutsideRef.current);
        clickOutsideRef.current = null;
      }
    };
  }, [menuOpen, setMenuOpen, headerRef]);
  const initialScrollY = useRef<number>(0);

  useEffect(() => {
    if (!menuOpen) return;
    initialScrollY.current = window.scrollY;
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (Math.abs(window.scrollY - initialScrollY.current) > 10) {
          setMenuOpen(false);
        }
      }, 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex w-full h-[50px] flex items-center"
style={{
  backgroundImage: "linear-gradient(180deg, #3F444A 0%, #3A3F45 100%)",
}}
      >
        <div className="container mx-auto px-4 hidden md:flex items-center justify-center gap-6 text-white font-semibold text-[14px]">
          
          {/* HOME */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center hover:text-gray-300 text-sm mr-12"
            title="Go to AIMLR 2026 Home Page"
            aria-label="AIMLR 2026 Home Page"
          >
            <Home size={20} />
            <span className="ml-2">HOME</span>
          </Link>


          {/* CALLS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setHovered("calls")}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">
              CALLS <ChevronDown size={16} />
            </span>
            {hovered === "calls" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[220px] z-10">
                <Link to="/call-for-abstract" className="block px-4 py-2 hover:bg-gray-100" title="Call for Abstracts - AIMLR 2026" aria-label="Call for Abstracts">Call for Abstracts</Link>
                <Link to="/call-for-papers" className="block px-4 py-2 hover:bg-gray-100" title="Call for Papers - AIMLR 2026" aria-label="Call for Papers">Call for Papers</Link>
                <Link to="/call-for-posters" className="block px-4 py-2 hover:bg-gray-100" title="Call for Posters - AIMLR 2026" aria-label="Call for Posters">Call for Posters</Link>
                <Link to="/call-for-speakers" className="block px-4 py-2 hover:bg-gray-100" title="Call for Speakers - AIMLR 2026" aria-label="Call for Speakers">Call for Speakers</Link>
                <Link to="/call-for-reviewers" className="block px-4 py-2 hover:bg-gray-100" title="Call for Reviewers - AIMLR 2026" aria-label="Call for Reviewers">Call for Reviewers</Link>
              </div>
            )}
          </div>

          {/* CONFERENCE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setHovered("conference")}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">
              CONFERENCE <ChevronDown size={16} />
            </span>
            {hovered === "conference" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[220px] z-10">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100" title="About AIMLR 2026 Conference" aria-label="About Conference">About Conference</Link>
                <Link to="/committee" className="block px-4 py-2 hover:bg-gray-100" title="AIMLR 2026 Conference Committee" aria-label="Committee">Committee</Link>
                {/* <Link to="/past-conferences" className="block px-4 py-2 hover:bg-gray-100">Past Conferences</Link> */}
              </div>
            )}
          </div>

          <Link to="/sessions" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="tracking-wider hover:text-gray-300 text-sm" title="Conference Sessions - AIMLR 2026" aria-label="Sessions">
            SESSIONS
          </Link>

          {/* SPEAKERS */}
          <Link to="/speakers" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="tracking-wider hover:text-gray-300 text-sm" title="Conference Speakers - AIMLR 2026" aria-label="Speakers">
            SPEAKERS
          </Link>

          {/* PROGRAM DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setHovered("program")}
            onMouseLeave={() => setHovered(null)}
          >
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="tracking-wider hover:text-gray-300 text-sm cursor-pointer flex items-center">
              PROGRAM <ChevronDown size={16} />
            </span>
            {hovered === "program" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md py-2 min-w-[220px] z-10">
                <Link to="/schedule" className="block px-4 py-2 hover:bg-gray-100" title="Program Schedule - AIMLR 2026" aria-label="Program Schedule">Program Schedule</Link>
                <Link to="/venue" className="block px-4 py-2 hover:bg-gray-100" title="Venue - AIMLR 2026" aria-label="Venue">Venue</Link>
                {/* <Link to="/sessions" className="block px-4 py-2 hover:bg-gray-100" title="Sessions - AIMLR 2026" aria-label="Sessions">Sessions</Link> */}
                <Link to="/important-dates" className="block px-4 py-2 hover:bg-gray-100" title="Important Dates - AIMLR 2026" aria-label="Important Dates">Important Dates</Link>

                {/* Newly Added */}
                <Link to="/guidelines" className="block px-4 py-2 hover:bg-gray-100" title="Conference Guidelines - AIMLR 2026" aria-label="Guidelines">Guidelines</Link>
                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100" title="Conference FAQ - AIMLR 2026" aria-label="FAQ">FAQ</Link>
              </div>
            )}
          </div>



          <Link to="/register" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="tracking-wider hover:text-gray-300 text-sm" title="Register for AIMLR 2026 Conference" aria-label="Register">
            REGISTER
          </Link>

          <Link to="/contact" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }} className="tracking-wider hover:text-gray-300 text-sm" title="Contact AIMLR 2026 Organizers" aria-label="Contact">
            CONTACT
          </Link>

        </div>  
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6">
          <div className="space-y-3">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block text-gray-800 font-semibold" title="Go to AIMLR 2026 Home Page" aria-label="AIMLR 2026 Home Page">
              HOME
            </Link>


            {/* CALLS DROPDOWN */}
            <div>
              <div
                onClick={() => setCallsOpen(!callsOpen)}
                className="flex items-center justify-between cursor-pointer text-gray-800 font-semibold"
              >
                CALLS
                <ChevronDown
                  className={`transform transition-transform ${callsOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </div>
              {callsOpen && (
                <div className="ml-4 space-y-2 mt-2">
                  <Link to="/call-for-abstract" className="block text-gray-600 hover:text-gray-800" title="Call for Abstracts - AIMLR 2026" aria-label="Call for Abstracts">Call for Abstracts</Link>
                  <Link to="/call-for-papers" className="block text-gray-600 hover:text-gray-800" title="Call for Papers - AIMLR 2026" aria-label="Call for Papers">Call for Papers</Link>
                  <Link to="/call-for-posters" className="block text-gray-600 hover:text-gray-800" title="Call for Posters - AIMLR 2026" aria-label="Call for Posters">Call for Posters</Link>
                  <Link to="/call-for-speakers" className="block text-gray-600 hover:text-gray-800" title="Call for Speakers - AIMLR 2026" aria-label="Call for Speakers">Call for Speakers</Link>
                  <Link to="/call-for-reviewers" className="block text-gray-600 hover:text-gray-800" title="Call for Reviewers - AIMLR 2026" aria-label="Call for Reviewers">Call for Reviewers</Link>
                </div>
              )}
            </div>


                        {/* CONFERENCE DROPDOWN */}
            <div>
              <div
                onClick={() => setConferenceOpen(!conferenceOpen)}
                className="flex items-center justify-between cursor-pointer text-gray-800 font-semibold"
              >
                CONFERENCE
                <ChevronDown
                  className={`transform transition-transform ${conferenceOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </div>
              {conferenceOpen && (
                <div className="ml-4 space-y-2 mt-2">
                  <Link to="/about" className="block text-gray-600 hover:text-gray-800" title="About AIMLR 2026 Conference" aria-label="About Conference">About Conference</Link>
                  <Link to="/committee" className="block text-gray-600 hover:text-gray-800" title="AIMLR 2026 Conference Committee" aria-label="Committee">Committee</Link>
                </div>
              )}
            </div>


            <Link to="/sessions" className="block text-gray-800 font-semibold" title="Conference Sessions - AIMLR 2026" aria-label="Sessions">
              SESSIONS
            </Link>

            <Link to="/speakers" className="block text-gray-800 font-semibold" title="Conference Speakers - AIMLR 2026" aria-label="Speakers">
              SPEAKERS
            </Link>



            {/* PROGRAM DROPDOWN */}
            <div>
              <div
                onClick={() => setProgramOpen(!programOpen)}
                className="flex items-center justify-between cursor-pointer text-gray-800 font-semibold"
              >
                PROGRAM
                <ChevronDown
                  className={`transform transition-transform ${programOpen ? 'rotate-180' : ''}`}
                  size={16}
                />
              </div>
              {programOpen && (
                <div className="ml-4 space-y-2 mt-2">
                  <Link to="/schedule" className="block text-gray-600 hover:text-gray-800" title="Program Schedule - AIMLR 2026" aria-label="Program Schedule">Program Schedule</Link>
                  <Link to="/venue" className="block text-gray-600 hover:text-gray-800" title="Venue - AIMLR 2026" aria-label="Venue">Venue</Link>
                  {/* <Link to="/sessions" className="block text-gray-600 hover:text-gray-800" title="Sessions - AIMLR 2026" aria-label="Sessions">Sessions</Link> */}
                  <Link to="/guidelines" className="block text-gray-600 hover:text-gray-800" title="Conference Guidelines - AIMLR 2026" aria-label="Guidelines">Guidelines</Link>
                  <Link to="/important-dates" className="block text-gray-600 hover:text-gray-800" title="Important Dates - AIMLR 2026" aria-label="Important Dates">Important Dates</Link>
                  <Link to="/faq" className="block text-gray-600 hover:text-gray-800" title="Conference FAQ - AIMLR 2026" aria-label="FAQ">FAQ</Link>
                </div>
              )}
            </div>

            <Link to="/register" className="block text-gray-800 font-semibold" title="Register for AIMLR 2026 Conference" aria-label="Register">
              REGISTER
            </Link>

            <Link to="/contact" className="block text-gray-800 font-semibold" title="Contact AIMLR 2026 Organizers" aria-label="Contact">
              CONTACT
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/register" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
              <button className="w-full bg-[#0047bd] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
                REGISTER
              </button>
            </Link>
            <Link to="/AbstractSubmission" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
              <button className="w-full bg-[#000f30] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
                ABSTRACT SUBMISSION
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNavbar;
