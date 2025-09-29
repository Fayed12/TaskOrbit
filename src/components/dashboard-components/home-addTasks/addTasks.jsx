// MUI
import ClearableProp from "../../dateAddTask";

// react
import { useState, useEffect } from "react";

// local
import style from "./addTasks.module.css";
import MainInput from "../../input"

const initialTaskData = {
      id: Date.now(),
      title: "",
      description: "",
      completed: false,
      priority: "",
      dueDate: null,
      userId: null,
}
function AddTasks({ openAddTask }) {
  const [newTaskData, setNewTaskData] = useState(initialTaskData);

  // handle cancel add task
  function handleCancelButton() {
    setNewTaskData(initialTaskData)
  }

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("RegisteredUser"));
    if (userInfo) {
      setNewTaskData((prev) => ({ ...prev, userId: Number(userInfo.id) }));
    }
  },[])

  if (!openAddTask) {
    return (
      <div>
        <h2>Start mange your tasks</h2>
      </div>
    )
  }
  return (
    <>
      <div className={style.addTasks}>
        <div className={style.addHeader}>
          <h1>Add New Task</h1>
          <p>Create a new task to add to your list</p>
        </div>
        <div className={style.addBody}>
          <form>
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
              <div className={style.cancelAdd}>
                <button type="button" onClick={handleCancelButton}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTasks;
