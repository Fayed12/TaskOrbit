// local
import style from "./dashboardAnalysis.module.css"
import TasksManagement from "../../../components/dashboard-components/TasksManagement/TasksManagement";
import TasksAnalysis from "../../../components/dashboard-components/TasksAnalysis/TasksAnalysis";
import TaskContextProvider from "../../../context/tasksContext";

// ==================================================================================================================
function DashboardAnalysis() {
    return (
      <TaskContextProvider>
        <div className={`${style.analysis}`}>
          <div className={style.taskManagement}>
            <TasksManagement />
          </div>
          <div className={style.TasksAnalysis}>
            <TasksAnalysis />
          </div>
        </div>
      </TaskContextProvider>
    );
}

export default DashboardAnalysis;