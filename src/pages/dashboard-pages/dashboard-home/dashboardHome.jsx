// local
import style from "./dashboardHome.module.css"
import AddTasks from "../../../components/dashboard-components/home-addTasks/addTasks"
import Tasks from "../../../components/dashboard-components/home-tasks/tasks"
import TaskContextProvider from "../../../context/tasksContext";
import { useState } from "react";

function DashboardHome() {
  const [openAddTask, setOpenAddTask] = useState(false);
    return (
      <div className={`${style.home}`}>
        <TaskContextProvider>
          <Tasks setOpenAddTask={setOpenAddTask} openAddTask={openAddTask} />
          <AddTasks openAddTask={openAddTask} />
        </TaskContextProvider>
      </div>
    );
}

export default DashboardHome;