// react
import { useEffect, useState } from "react";

// local
import style from "./dashboardHome.module.css"
import AddTasks from "../../../components/dashboard-components/home-addTasks/addTasks"
import Tasks from "../../../components/dashboard-components/home-tasks/tasks"
import TaskContextProvider from "../../../context/tasksContext";

function DashboardHome() {
    const [name, setName] = useState("")

    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem("RegisteredUser"));
        if (userInfo) {
            setName(userInfo.name.split(" ").at(0));
        }
    }, [])
    return (
      <div className={`${style.home}`}>
            <div className={style.welcomeUser}>
                <h2>hello {name}</h2>
            </div>
            <TaskContextProvider>
            <Tasks />
            <AddTasks/>
            </TaskContextProvider>
      </div>
    );
}

export default DashboardHome;