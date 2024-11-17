import React from "react";

function About() {
  return (
    <>
      <section className="about bg-purple-900" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <div className="about-img">
          <img src="../src/components/Img/12.jpg" alt="about img" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>MERNSTACK Developer!</h3>
          <p>
            Passionate about technology and innovation, I’m Nitish Kumar, a MERN
            stack developer and full-stack enthusiast focused on building
            responsive, interactive web applications. Currently, I’m a 2nd-year
            Computer Science and Engineering (Artificial Intelligence) student
            at Government Engineering College Munger, with a CGPA of 8.33. My
            educational journey began with a diploma in Computer Science from
            Government Polytechnic Barauni, providing a strong foundation in
            tech. I’ve worked on diverse projects, from digital library
            platforms to freelancing marketplaces, and recently participated in
            the Smart India Hackathon. Our team developed an image enhancement
            tool for lunar craters, using data from Chandrayaan-2’s OHRC to
            improve low-light images from permanently shadowed regions,
            enhancing signal-to-noise ratio for detailed analysis. As a Cyber
            Security Awareness Week master trainer with C-DAC Patna, a cultural
            program coordinator at my college, and a website creator, I’m driven
            by a commitment to continuous learning and problem-solving. Let’s
            connect and explore ideas on #WebDevelopment, #CyberSecurity, #AI,
            and beyond!
          </p>

          <div className="btnin">
            <div className="btn-box btns" id="btnn">
              <a href="https://www.linkedin.com/in/nitish-kumar-083813215/" className="btn">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
