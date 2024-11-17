import React from 'react';
import '../util/Cube.css'; // Import the CSS for the cube


const Cube = () => {
  return (
<div className='flex justify-around gap-12 mt-36 pb-24 ml-5 '>

<div className='cube'>
<div className="face front">JavaScript</div>
<div className="face back">React</div>
<div className="face left">Node.js</div>
<div className="face right">Express js</div>
<div className="face top">HTML</div>
<div className="face bottom">MongoDB</div>
</div>

<div className='cube'>
<div className="face front">Python</div>
<div className="face back">Data Structure</div>
<div className="face left">Java</div>
<div className="face right">C & C++</div>
<div className="face top">OpenCv</div>
<div className="face bottom">TanserFlow</div>
</div>
</div>
  );
};

export default Cube;
