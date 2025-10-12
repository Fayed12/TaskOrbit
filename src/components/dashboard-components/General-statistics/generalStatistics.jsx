// react
import { useEffect, useState } from "react";

// local
import style from "./generalStatistics.module.css"
import { API_BASE_TASKS_URL } from "../../../config";
import UseTasks from "../../../hooks/tasksCustomHook";
import TasksCompletionChart from "../../pieChartCompleted";
import TasksPriorityChart from "../../TasksPriorityChart";
import useStatistics from "../../../hooks/allStatisticsHook";

function GeneralStatistics() {
  const [allTasks] = UseTasks();
  const [tasks, setTasks] = useState([]);
  const [
    completedTasks,
    notCompletedTasks,
    highPriorityTasks,
    mediumPriorityTasks,
    lowPriorityTasks,
    endDateTasks,
    notEndDateTasks,
  ] = useStatistics(tasks);

  // get all tasks
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_BASE_TASKS_URL);
      if (!res.ok) {
        throw new Error("something went wrong in fetching data");
      }
      const data = await res.json();
      setTasks(data);
    }
    fetchData();
  }, [allTasks]);
  return (
    <>
      <div className={style.generalStatistics}>
        <div className={style.title}>
          <h1>general Statistics/</h1>
        </div>
        <div className={style.cards}>
          <div className={style.tasksNumCard}>
            <span>Number of All Tasks </span>
            <span>{tasks.length}</span>
          </div>
          <div className={style.tasksNumCompleted}>
            <span>Number of completed Tasks </span>
            <span>{completedTasks.length}</span>
          </div>
          <div className={style.tasksNumNotCompleted}>
            <span>Number of not completed Tasks </span>
            <span>{notCompletedTasks.length}</span>
          </div>
          <div className={style.tasksNumHighPriority}>
            <span>Number of high priority Tasks </span>
            <span>{highPriorityTasks.length}</span>
          </div>
          <div className={style.tasksNumMediumPriority}>
            <span>Number of medium priority Tasks </span>
            <span>{mediumPriorityTasks.length}</span>
          </div>
          <div className={style.tasksNumLowPriority}>
            <span>Number of low priority Tasks </span>
            <span>{lowPriorityTasks.length}</span>
          </div>
          <div className={style.tasksNumEndDate}>
            <span>Number of tasks that have been ended by date time</span>
            <span>{endDateTasks}</span>
          </div>
          <div className={style.tasksNumEndDate}>
            <span>Number of tasks not yet completed by date and time</span>
            <span>{notEndDateTasks}</span>
          </div>
        </div>
        <div className={style.charts}>
          <TasksCompletionChart
            completed={completedTasks.length}
            notCompleted={notCompletedTasks.length}
          />
          <TasksPriorityChart
            high={highPriorityTasks.length}
            medium={mediumPriorityTasks.length}
            low={lowPriorityTasks.length}
          />
        </div>
      </div>
    </>
  );
}

export default GeneralStatistics;