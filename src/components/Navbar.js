import React from 'react';
import './Navbar.css';
import calendar2 from "../assets/icons/calendar-2.svg";
import messagequestion from "../assets/icons/message-question.svg";
import notification from "../assets/icons/notification.svg";
import arrowdown from "../assets/icons/arrow-down.svg";
import maskgrp from "../assets/images/Mask Group.svg";
import searchnormal from "../assets/icons/search-normal.svg";

function Navbar() {
  return (
    <div className='navbar'>
        <form className='navbar__form'>
            <label>
                <img src={searchnormal}></img>
                <input placeholder='Search for anything...'></input>
            </label>
        </form>
        <div className='navbar__buttons'>
            <button>
                <img src={calendar2}></img>
            </button>
            <button>
                <img src={messagequestion}></img>
            </button>
            <button>
                <img src={notification}></img>
            </button>
        </div>
        <div className='navbar__profile'>
            <div className='profile__info'>
                <p>Anima Agarwal</p>
                <p>U.P, India</p>
            </div>
            <img src={maskgrp}></img>
            <button>
                <img src={arrowdown}></img>
            </button>
        </div>
    </div>
  )
}

export default Navbar