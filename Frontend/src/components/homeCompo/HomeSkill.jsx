import React from "react";
import Cube from "./util/Cube";
import '../homeCompo/util/Cube.css';

import Skills from "./util/Skills";

function HomeSkill() {
  return (
    <div className="SkillContainer bg-cyan-950">
         <h1 className="neon-headingg">Technology And Skills</h1>
        <Skills/>
    </div>
  );
}

export default HomeSkill;
