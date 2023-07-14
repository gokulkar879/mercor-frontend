import React from 'react';
import Navbar from './Navbar';
import MobileApp from '../utilComponents/MobileApp';
import Share from '../utilComponents/Share';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import { useTaskContext } from '../taskContext';
import addsquare from "../assets/icons/blue-add-square.svg";
import Tasks from './Tasks';


function Dashboard() {

  const {tasks, setTasks} = useTaskContext();

  const handleDragEnd = ({ destination, source }) => {
    console.log("p");
    if(!destination || source.droppableId == destination.droppableId || source.droppableId == 'Done') {
        return;
    }

    console.log(destination, source);
    const srcId = source.droppableId;
    const dstId = destination.droppableId;

    const srcIndex = source.index;
    const destIndex = destination.index;
    
    const srcArr = tasks[`${srcId}`];
    const dstArr = tasks[`${dstId}`];

    const task = srcArr[srcIndex];
    srcArr.splice(srcIndex, 1);

    if(dstId == "Done") {
       task.severity = ""
    }
    dstArr.splice(destIndex, 0, task);

    setTasks({...tasks, [`${srcId}`]: srcArr, [`${dstId}`]: dstArr});
}

  return (
    <div className='dashboard'>
      <Navbar />
      <div className='dashboard__center'>
        <MobileApp />
        <Share />
      </div>
      <div className='dashboard__tasks'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='dashboard-tasks-center'>
            <Droppable droppableId="ToDo">
              {
                (provided) => (
                  <div className='ToDo' {...provided.droppableProps} ref={provided.innerRef}>
                    <div className='_dashboard-tasks'>
                      <div className='header-todo'>
                        <div className='tasks__header'>
                          <div style={{background: "#5030E5", width: "8px", height: "8px", borderRadius: "50%"}}></div>
                          <p>To Do  <span className='count'>{tasks.ToDo && tasks.ToDo.length}</span></p>
                          <img src={addsquare}></img>
                        </div>
                        <div className='horizonatal-line' style={{background: "#5030E5", height: "3px"}}></div>
                      </div>
                      <div className='tasks-center'>
                        {
                          tasks.ToDo && tasks.ToDo.map((task, index) => {
                            const {title, severity, description, peoples, img, id, comments, files} = task;
                            return (
                                <Draggable key={id} draggableId={id} index={index}>
                                  {
                                    (provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Tasks id={id} title={title} severity={severity} description={description} peoples={peoples} img={img} comments={comments} files={files}/>
                                    </div>
                                    )
                                  }
                                </Draggable>
                            )
                          })
                        }
                      </div>
                    </div>
                    {
                        provided.placeholder
                    }
                  </div>
                )
              }
            </Droppable>
            <Droppable droppableId="OnProgress">
              {
                (provided) => (
                  <div className='OnProgress'  {...provided.droppableProps} ref={provided.innerRef}>
                    <div className='_dashboard-tasks'>
                      <div className='header-onProgress'>
                        <div className='tasks__header'>
                          <div style={{background: "#FFA500", width: "8px", height: "8px", borderRadius: "50%"}}></div>
                          <p>On Progress <span className="count">{tasks.OnProgress && tasks.OnProgress.length}</span></p>
                        </div>
                        <div className='horizontal-line' style={{background: "#FFA500", height: "3px"}}></div>
                      </div>
                      <div className='tasks-center'>
                        {
                          tasks.OnProgress && tasks.OnProgress.map((task, index) => {
                            const {title, severity, description, peoples, img, id, comments, files} = task;

                            return <Draggable key={id} draggableId={id} index={index}>
                              {
                                  (provided) => (
                                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                          <Tasks id={id} title={title} severity={severity} description={description} peoples={peoples} img={img} comments={comments} files={files}/>
                                      </div>
                                  )
                              }
                            </Draggable>
                          })
                        }
                      </div>
                    </div>
                    {
                        provided.placeholder
                    }
                  </div>
                )
              }
            </Droppable>
            <Droppable droppableId="Done">
              {
                (provided) => (
                  <div className='Done' {...provided.droppableProps} ref={provided.innerRef}>
                    <div className='_dashboard-tasks'>
                      <div className='header-done'>
                        <div className='tasks__header'>
                          <div style={{background: "#76A5EA", width: "8px", height: "8px", borderRadius: "50%"}}></div>
                          <p>Done <span className="count">{tasks.Done && tasks.Done.length}</span></p>   
                        </div>      
                        <div className='horizontal-line' style={{background: "#8BC48A", height: "3px"}}></div>
                      </div>
                      <div className='tasks-center'>
                        {
                          tasks.Done && tasks.Done.map((task, index) => {
                            const {title, severity, description, peoples, img, id, comments, files} = task;

                            return (
                              <Draggable key={id} draggableId={id} index={index}>
                                {
                                    (provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Tasks id={id} title={title} severity={severity} description={description} peoples={peoples} img={img} comments={comments} files={files}/>
                                        </div>
                                    )
                                }
                              </Draggable>
                            )
                          })
                        }
                      </div>
                    </div>
                    {
                        provided.placeholder
                    }
                  </div>
                )
              }
            </Droppable>
        </div>
        </DragDropContext>
      </div>
    </div>
  )
}

export default Dashboard