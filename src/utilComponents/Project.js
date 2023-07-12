import React from 'react';
import './Project.css';

function Project({text, current=false}) {
  return (
    <div className={`project ${current ? 'active' : ''}`}>
        <p>{text}</p>
    </div>
  )
}

export default Project