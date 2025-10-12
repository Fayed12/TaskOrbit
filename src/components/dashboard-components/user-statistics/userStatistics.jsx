// local
import style from "./userStatistics.module.css"
import UseTasks from "../../../hooks/tasksCustomHook";
import useStatistics from "../../../hooks/allStatisticsHook";
import TasksCompletionChart from "../../pieChartCompleted";
import TasksPriorityChart from "../../TasksPriorityChart";
import TasksEndDateChart from "../../tasksDateChart";

function UserStatistics() {
    const [allTasks] = UseTasks();
    const [
      completedTasks,
      notCompletedTasks,
      highPriorityTasks,
      mediumPriorityTasks,
      lowPriorityTasks,
      endDateTasks,
      notEndDateTasks,
    ] = useStatistics(allTasks);

    return (
      <>
        <div className={style.UserStatistics}>
          <div className={style.title}>
            <h1>User Statistics/</h1>
          </div>
          <div className="charts">
            <TasksCompletionChart
              completed={completedTasks.length}
              notCompleted={notCompletedTasks.length}
            />
            <TasksPriorityChart
              high={highPriorityTasks.length}
              medium={mediumPriorityTasks.length}
              low={lowPriorityTasks.length}
            />
            <TasksEndDateChart
              endDateTasks={endDateTasks}
              notEndDateTasks={notEndDateTasks}
            />
          </div>
        </div>
      </>
    );
}

export default UserStatistics;