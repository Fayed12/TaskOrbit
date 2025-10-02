// MUI
import ClearableProp from "../../dateAddTask";

// react
import { useState, useEffect } from "react";

// toast
import toast from "react-hot-toast";

// local
import style from "./addTasks.module.css";
import MainInput from "../../input";
import { API_BASE_TASKS_URL } from "../../../config";
import UseTasks from "../../../hooks/tasksCustomHook";

const initialTaskData = {
  id: String(Date.now()),
  title: "",
  description: "",
  completed: false,
  priority: "",
  dueDate: null,
  userId: null,
};
function AddTasks({ openAddTask }) {
  const[openCancel , setOpenCancel] = useState(false)
  const [, setTasks] = UseTasks();
  const [newTaskData, setNewTaskData] = useState(initialTaskData);

  // function check values
  function handleCheckValue() {
    if (!newTaskData.title) {
      toast.error("please write task title!", { id: "addTask-toast" });
      return true;
    }
    if (!newTaskData.priority) {
      toast.error("please choose task priority!", { id: "addTask-toast" });
      return true;
    }
    if (!newTaskData.dueDate) {
      toast.error("please choose date!", { id: "addTask-toast" });
      return true;
    }
    return false;
  }

  // function add new task;
  async function handleAddTask(e) {
    e.preventDefault();
    if (handleCheckValue()) return;
    try {
      const res = await fetch(API_BASE_TASKS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTaskData),
      });

      if (!res.ok) {
        throw new Error("something error");
      }

      const newTasksRes = await res.json();
      setTasks((prev) => [...prev, newTasksRes]);
      toast.success("tasks add successful !", { id: "addTask-toast" });
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
    setNewTaskData(initialTaskData);
  }

  // handle cancel add task
  function handleCancelButton() {
    const confirmCancel = confirm("are you shure you want cancel this task?");
    if (!confirmCancel) {
      return;
    }
    setNewTaskData(initialTaskData);
    toast.success("Cancel add this task", { id: "addTask-toast" });
  }

    useEffect(() => {
      if (
        newTaskData.title ||
        newTaskData.priority ||
        newTaskData.description ||
        newTaskData.dueDate
      ) {
        setOpenCancel(true);
      } else {
        setOpenCancel(false);
      }
    }, [
      newTaskData.description,
      newTaskData.dueDate,
      newTaskData.priority,
      newTaskData.title,
    ]);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("RegisteredUser"));
    if (userInfo) {
      setNewTaskData((prev) => ({ ...prev, userId: String(userInfo.id) }));
    }
  }, []);

  if (!openAddTask) {
    return (
      <div className={style.hiddenMessage}>
        <h2>Start mange your tasks</h2>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center">
      <div className={style.addTasks}>
        <div className={style.addHeader}>
          <h1>Add New Task</h1>
          <p>Create a new task to add to your list</p>
        </div>
        <div className={style.addBody}>
          <form onSubmit={(e) => handleAddTask(e)}>
            <MainInput
              inpType="text"
              inpPlaceholder="Enter task title..."
              inpValue={newTaskData.title}
              inpSetValue={(e) =>
                setNewTaskData({
                  ...newTaskData,
                  title: e.target.value,
                })
              }
            />
            <MainInput
              inpType="text"
              inpPlaceholder="Add a description (optional)..."
              inpValue={newTaskData.description}
              inpSetValue={(e) =>
                setNewTaskData({
                  ...newTaskData,
                  description: e.target.value,
                })
              }
            />
            <div className={style.specialInput}>
              <select
                className={style.selectInput}
                name="Priority"
                value={newTaskData.priority}
                onChange={(e) =>
                  setNewTaskData({
                    ...newTaskData,
                    priority: e.target.value,
                  })
                }
              >
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <div className={style.ClearableProp}>
                <ClearableProp
                  newTaskData={newTaskData}
                  setDateValue={setNewTaskData}
                />
              </div>
            </div>
            <div className={style.Btn}>
              <div className={style.successAdd}>
                <button type="submit">Add Task</button>
              </div>
              <div
                className={`${style.cancelAdd}  ${
                  !openCancel ? style.disabledCancel : ""
                }`}
              >
                <button
                  disabled={!openCancel ? true : false}
                  type="button"
                  onClick={handleCancelButton}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTasks;
