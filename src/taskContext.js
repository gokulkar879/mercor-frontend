import React, { useContext, useEffect, useState } from 'react';
import data from './data.js';

const TaskContext = React.createContext();


const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        setTasks(data);
    }, [])

    return <TaskContext.Provider value={{
        tasks,
        setTasks
    }}>
        {
            children
        }
    </TaskContext.Provider>
}

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export default TaskProvider