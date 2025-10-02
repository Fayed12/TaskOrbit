// react
import { createContext, useEffect, useState } from "react";

// local 
import { API_BASE_TASKS_URL } from "../config";

// eslint-disable-next-line react-refresh/only-export-components
export const tasksContext = createContext();

function TaskContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [userID, setUserId] = useState()

    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem("RegisteredUser"));
        if (userInfo) {
            setUserId(userInfo.id);
        }
    }, [])

    useEffect(() => {
        async function fetchTasks() {
            try {
                const res = await fetch(`${API_BASE_TASKS_URL}/?userId=${userID}`);
            if (!res.ok) {
                throw new Error("something error");
            }
            const tasksFromRes = await res.json();
            setTasks(tasksFromRes);
            } catch (err) {
                console.log(err.message)
            }
      }
        fetchTasks()
    },[userID])
    
    return (
      <tasksContext.Provider
        value={{ tasks, setTasks }}
      >
        {children}
      </tasksContext.Provider>
    );
}

export default TaskContextProvider;