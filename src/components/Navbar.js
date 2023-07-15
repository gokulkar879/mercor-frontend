import React from 'react';
import './Navbar.css';
import calendar2 from "../assets/icons/calendar-2.svg";
import messagequestion from "../assets/icons/message-question.svg";
import notification from "../assets/icons/notification.svg";
import arrowdown from "../assets/icons/arrow-down.svg";
import maskgrp from "../assets/images/Mask Group.svg";
import searchnormal from "../assets/icons/search-normal.svg";
import group639 from "../assets/icons/Group 639.svg";

function Navbar() {

    const handleClick = ev => {
        const sidebar = document.querySelector(".sidebar");
        const btn = document.querySelector(".sidebar__control");

        sidebar.style.width = "260px";
        btn.style.display = "none";
    }

  return (
    <div className='navbar'>
        <button className='sidebar__control' onClick={handleClick}>
            <img src={group639}></img>
        </button>
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