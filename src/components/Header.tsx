
import React, { useState, useRef } from "react";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import AnnouncementBar from "./AnnouncementBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header ref={headerRef} className="w-full bg-white shadow-md font-sans sticky top-0 z-50">
      <TopNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BottomNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} headerRef={headerRef} />
      <AnnouncementBar />
    </header>
  );
};

export default Header;