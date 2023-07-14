import React from 'react';
import "./Tasks.css";
import _ from "../assets/icons/_. ..svg";
import message from "../assets/icons/message.svg";
import folder2 from "../assets/icons/folder-2.svg";

function Tasks({title, severity, description, peoples, img, comments, files}) {
  return (
    <div className='task'>
        <div className='task__header'>
            {
                severity ? <p className={`${severity}`}>{severity}</p> : <p className='completed'>Completed</p>
            }
            <img src={_}></img>
        </div>
        <p className='task__title'>{title}</p>
        {
            description ? <p className='task__description'>{description}</p> : <img src={img}></img>
        }
        <div className='task__footer'>
            <div className='footer__left'>
                {
                    peoples.map((people, index) => {
                        const {avatar, _id} = people;

                        return <img key={_id} src={avatar} style={{transform: `translate(${(peoples.length-1-index)*4}px, ${0}px)`, zIndex: `${peoples.length-index}`}}></img>
                    })
                }
            </div>
            <div className='footer__right'>
                <div className='component'>
                    <img src={message}></img>
                    <p>{comments} comments</p>
                </div>
                <div className='component'>
                    <img src={folder2}></img>
                    <p>{files} files</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks