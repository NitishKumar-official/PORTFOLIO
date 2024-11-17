import React from 'react';
import '../util/Skills.css';
import Cube from './Cube';

function Skills() {
  return (
    <>
    <section className="skills mt-16" id="skills">
      <h2 className="heading ">
        My <span>Skills</span> 
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">
            Coding Skills 
          </h3>

          <div className="skills-box">
            <div className="skills-content">
              {[
                { name: "DSA With Java", percentage: 90 },
                { name: "Python", percentage: 80 },
                { name: "JavaScript", percentage: 70 },
                { name: "C++ & C", percentage: 90 },
              ].map(skill => (
                <div className="progress" key={skill.name}>
                  <h3>{skill.name} <span>{skill.percentage}%</span></h3>
                  <div className="bar">
                    <span style={{ width: `${skill.percentage}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">
            Professional Skills 
            
          </h3>

          <div className="skills-box">
            <div className="skills-content">
              {[
                { name: "MERN STACK", percentage: 90 },
                { name: "Web Design", percentage: 90 },
                { name: "Graphic Design", percentage: 75 },
                { name: "Public Speaking And Leadership", percentage: 80 },
              ].map(skill => (
                <div className="progress" key={skill.name}>
                  <h3>{skill.name} <span>{skill.percentage}%</span></h3>
                  <div className="bar">
                    <span style={{ width: `${skill.percentage}%` }}></span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
    <Cube/>
    </>
  );
}

export default Skills;
