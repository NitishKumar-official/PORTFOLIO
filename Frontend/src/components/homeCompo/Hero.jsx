import React from "react";
import "../../App.css"; // Ensure the correct path to your CSS file

function Hero() {
  return (
    <>
      <div className="all">
        <section className="home show-animate" id="home">
          <div className="home-content">
            <h1>
              Hi, I'm <span>Nitish Kumar</span>
            </h1>
            <div className="text-animate">
              <h3>MERN STACK Developer</h3>
            </div>
            <p>
              MERN stack developer, known for building responsive web applications and
              innovative projects like 'BookWiz' and 'DwellingDots.' I am a
              master trainer for C-DAC's Cyber Security Awareness and an active
              cultural coordinator at college, with achievements in hackathons
              and leadership in tech and event management.
            </p>

            <div className="btn-box">
              <a href="/project" className="btn">
                My Projects
              </a>
              <a target="/" href="https://www.linkedin.com/in/nitish-kumar-083813215" className="btn">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="home-sci">
            <a target="/" href="https://github.com/NitishKumar-official">
              <i className="bx bxl-github"></i>
            </a>
            <a target="/" href="https://twitter.com/NitishKuma57321">
              <i className="bx bxl-twitter"></i>
            </a>
            <a target="/" href="https://www.linkedin.com/in/nitish-kumar-083813215">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="home-imgHover"></div>
        </section>
      </div>
    </>
  );
}

export default Hero;
