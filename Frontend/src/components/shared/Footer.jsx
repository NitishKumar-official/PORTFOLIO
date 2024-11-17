import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="main_footer_top">
          <div className="head_footer_top">
            <div className="footer_text">
              <h1>Contact Us</h1>
              <div className="flex gap-10 text-3xl ">
                <a href="https://github.com/NitishKumar-official">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://twitter.com/NitishKuma57321">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/nitish-kumar-083813215">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <div className="footer_para_div">
                <span className="footer_para">Say Hello </span>
              </div>
            </div>
            <div className="footer_text1">
              <h1>Stay up to date</h1>
              <p>
                Visit to my LinkedIn and keep up to date with the latest project
                and information.{" "}
              </p>
              <div className="footer_para_div1">
                <span className="footer_para1">@nitishrana </span>
              </div>
            </div>
          </div>

          <div className="footer_top">
            <p className="footerP_Head">
              passionate Of <span className="footer_span"> MERN Stack</span>
            </p>
            <p className="supports ml-4">
              <a href="#">@copyright - Nitish Rana</a>
            </p>
            <p className="footer_last_para">
              I’m Nitish Kumar, a MERN stack developer and full-stack enthusiast
              focused on building responsive, interactive web applications.
              Currently, I’m a 2nd-year Computer Science and Engineering
              (Artificial Intelligence) student at Government Engineering
              College Munger, with a CGPA of 8.33. My educational journey began
              with a diploma in Computer Science from Government Polytechnic
              Barauni, providing a strong foundation in tech.
            </p>
            <p className="footer_last_para1">
              I’ve worked on diverse projects, from digital library platforms to
              freelancing marketplaces, and  developed an image enhancement tool for
              lunar craters, using data from Chandrayaan-2’s OHRC to improve
              low-light images from permanently shadowed regions.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
