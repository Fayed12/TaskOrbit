// react
import { useEffect, useState } from "react";

// local
import style from "./generalStatistics.module.css"
import { API_BASE_TASKS_URL } from "../../../config";

function GeneralStatistics() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [notCompletedTasks, setNotCompletedTasks] = useState([]);
  const [priorityTasks, setPriorityTasks] = useState([]);
  const [endDateTasks, setendDateTasks] = useState([]);
  const [notEndDateTasks, setDatNotEndTasks] = useState([]);

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
  }, []);

  // get all General Statistics
  useEffect(() => {
    if (tasks.length > 0) {
      const completedList = tasks.filter((task) => {
        return task.completed;
      });
      const NotCompletedList = tasks.filter((task) => {
        return !task.completed;
      });
      const priorityList = tasks.filter((task) => {
        return !task.completed;
      });
      const endDateLIst = tasks.filter((task) => {
        return !task.completed;
      });
      const notEndDateLIst = tasks.filter((task) => {
        return !task.completed;
      });
      setCompletedTasks(completedList);
      setNotCompletedTasks(NotCompletedList);
    }
  }, [tasks]);
  console.log(notCompletedTasks);

  return (
    <>
      <div className={style.generalStatistics}>
        <div className={style.cards}>
          <div className={style.tasksNumCard}>
            <span>{tasks.length}</span>
          </div>
          <div className={style.tasksNumCompleted}>
            <span>{tasks.length}</span>
          </div>
          <div className={style.tasksNumNotCompleted}>
            <span>{tasks.length}</span>
          </div>
          <div className={style.tasksNumPriority}>
            <span>{tasks.length}</span>
          </div>
          <div className={style.tasksNumDate}>
            <span>{tasks.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralStatistics;