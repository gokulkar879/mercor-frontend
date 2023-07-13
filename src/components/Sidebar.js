import React from 'react';
import group7 from "../assets/icons/Group 7.svg";
import message from "../assets/icons/message.svg";
import category from "../assets/icons/category.svg";
import tasksqaure from "../assets/icons/task-square.svg";
import profile2user from "../assets/icons/profile-2user.svg";
import setting from "../assets/icons/setting-2.svg";
import Link from '../utilComponents/Link';
import Project from '../utilComponents/Project';
import group639 from "../assets/icons/Group 639.svg";
import addsquare from "../assets/icons/add-square.svg";
import lampon from "../assets/icons/lamp-on.svg";


function Sidebar() {

    const handleClick = ev => {
        const sidebar = document.querySelector(".sidebar")
        sidebar.style.width = "0px";
    }

  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <img src={group7}></img>
            <p>Project M.</p>
            <button onClick={handleClick}>
                <img src={group639}></img>
            </button>
        </div>
        <div className='sidebar__center'>
            <div className='sidebar__links'>
                <Link text="Home" icon={category}/>
                <Link text="Messages" icon={message}/>
                <Link text="Tasks" icon={tasksqaure}/>
                <Link text="Members" icon={profile2user}/>
                <Link text="Settings" icon={setting}/>
            </div>
            <div className='sidebar__projects'>
                <div className='projects__header'>
                    <p>MY PROJECTS</p>
                    <img src={addsquare}></img>
                </div>
                <Project text="Mobile App" current={true}/>
                <Project text="Website Redesign"/>
                <Project text="Design System"/>
                <Project text="Wireframes"/>
            </div>
            <div className='sidebar__footer'>
                <img src={lampon}></img>
                <p id="footer-1">Thoughts Time</p>
                <p id="footer-2">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                <p id="footer-3">Write a message</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar