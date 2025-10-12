// react
import { useEffect, useState, useRef } from "react";

// local
import style from "./generalStatistics.module.css"
import { API_BASE_TASKS_URL } from "../../../config";
import UseTasks from "../../../hooks/tasksCustomHook";
import TasksCompletionChart from "./pieChartCompleted";
import TasksPriorityChart from "./TasksPriorityChart";

function GeneralStatistics() {
  const [allTasks] = UseTasks();
  const storedDate = useRef()
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [notCompletedTasks, setNotCompletedTasks] = useState([]);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  const [endDateTasks, setEndDateTasks] = useState([]);
  const [notEndDateTasks, setDateNotEndTasks] = useState([]);

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

  // get all General Statistics
  useEffect(() => {
    if (tasks.length > 0) {
      const completedList = tasks.filter((task) => {
        return task.completed;
      });
      const NotCompletedList = tasks.filter((task) => {
        return !task.completed;
      });
      const highPriorityList = tasks.filter((task) => {
        return task.priority == "high";
      });
      const mediumPriorityList = tasks.filter((task) => {
        return task.priority == "medium";
      });
      const lowPriorityList = tasks.filter((task) => {
        return task.priority == "low";
      });
      setCompletedTasks(completedList);
      setNotCompletedTasks(NotCompletedList);
      setHighPriorityTasks(highPriorityList);
      setMediumPriorityTasks(mediumPriorityList)
      setLowPriorityTasks(lowPriorityList);

    }
  }, [tasks]);

  useEffect(() => {
    const today = new Date();
    const lateTasks = tasks.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return taskDate < today;
    });
    if (lateTasks.length !== 0) {
      setEndDateTasks(lateTasks.length);
      storedDate.current = lateTasks.length;
      const notEnd = Number(tasks.length) - Number(storedDate.current);
      setDateNotEndTasks(notEnd);
    } else {
      setDateNotEndTasks(tasks.length);
      setEndDateTasks(0)
    }
  }, [tasks])

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