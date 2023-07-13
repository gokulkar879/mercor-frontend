import React from 'react';
import "./Share.css";
import ellipse12 from "../assets/images/Ellipse 12.svg";
import ellipse13 from "../assets/images/Ellipse 13.svg";
import ellipse15 from "../assets/images/Ellipse 15.svg";
import ellipse14 from "../assets/images/Ellipse 14.svg";
import addsquare from "../assets/icons/blue-add-square.svg";
import group612 from "../assets/icons/Group 612.svg";
import menu from "../assets/icons/menu.svg";
import profile2user from "../assets/icons/profile-2user.svg";

function Share() {
  return (
    <div className='share'>
        <div className='share__header'>
            <img src={addsquare}></img>
            <p>Invite</p>
            <div className='share__image__container'>
                <img src={ellipse12}></img>
                <img src={ellipse13}></img>
                <img src={ellipse15}></img>
                <img src={ellipse14}></img>
                <div className='temp'><p>+2</p></div>
            </div>
        </div>
        <div className='share__footer'>
            <button className='share-btn'>
                <img src={profile2user}></img>
                <p>Share</p>
            </button>
            <div className='line'></div>
            <button>
                <img src={group612}></img>
            </button>
            <button>
                <img src={menu}></img>
            </button>
        </div>
    </div>
  )
}

export default Share