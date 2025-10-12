// react
import { useState, useRef, useEffect } from "react";

function useStatistics(tasks) {
  const storedDate = useRef();
  const [completedTasks, setCompletedTasks] = useState([]);
  const [notCompletedTasks, setNotCompletedTasks] = useState([]);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  const [endDateTasks, setEndDateTasks] = useState([]);
  const [notEndDateTasks, setDateNotEndTasks] = useState([]);

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
      setMediumPriorityTasks(mediumPriorityList);
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
      setEndDateTasks(0);
    }
  }, [tasks]);

  return [
    completedTasks,
    notCompletedTasks,
    highPriorityTasks,
    mediumPriorityTasks,
    lowPriorityTasks,
    endDateTasks,
    notEndDateTasks,
  ];
}

export default useStatistics;
