import React from 'react';
import './Link.css';

function Link({text, icon}) {
  return (
    <div className='link'>
        <img src={icon}></img>
        <p>{text}</p>
    </div>
  )
}

export default Link