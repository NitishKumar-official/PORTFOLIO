import React from "react";
import "../../App.css"; // Ensure the correct path to your CSS file

function Header() {
  return (
    <>
    <div className="all ">
    <header className="header ">
      <a href="#" className="logo">
        Nitish<span className="logo_span">Kumar</span>
      </a>
      <div className="bx bx-menu" id="menu-icon">
      </div>

      <nav className="navbar bg-red-600 pr-10 pt-4 pb-4 rounded-md">
        <a href="/" className="active">
          Home
        </a>
        <a href="/skills">Skill</a>
        <a href="/project">Project</a>
        <a href="/about">About</a>
        <a href="/education">Education</a>
        
        <span className="active-nav"></span>
      </nav>
    </header>
    </div>
  </>
  );
}

export default Header;
