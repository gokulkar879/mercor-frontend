import React from 'react';
import "./MobileApp.css";
import filter from "../assets/icons/filter.svg";
import arrowdown from "../assets/icons/arrow-down.svg";
import calendar from "../assets/icons/calendar.svg";
import arrowsquareup from "../assets/icons/arrow-square-up.svg";
import link from "../assets/icons/Group 626.svg";

function MobileApp() {
  return (
    <div className='mobileApp'>
        <div className='mobileApp__header'>
            <p>Mobile App</p>
            <img src={arrowsquareup}></img>
            <img src={link}></img>
        </div>
        <div className='mobileApp__buttons'>
            <button>
                <img src={filter}></img>
                <p>Filter</p>
                <img src={arrowdown}></img>
            </button>     
            <button>
                <img src={calendar}></img>
                <p>Today</p>
                <img src={arrowdown}></img>
            </button>     
        </div>
    </div>
  )
}

export default MobileApp