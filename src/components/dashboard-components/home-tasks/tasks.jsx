// react
import { useEffect, useState } from "react";

// MUI
import AddIcon from "@mui/icons-material/Add";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

// local
import style from "./tasks.module.css";
import UseTasks from "../../../hooks/tasksCustomHook";
import TasksTable from "../../taskTaple";

// ==================================================================================================================
function Tasks({ setOpenAddTask, openAddTask }) {
  const [allTasks] = UseTasks();
  const [name, setName] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("RegisteredUser"));
    if (userInfo) {
      setName(userInfo.name.split(" ").at(0));
    }
  }, []);

  return (
    <>
      <div className={style.taskContent}>
        <div className={style.welcomeUser}>
          <h2>
            hello / <span>{name}</span>
          </h2>
        </div>
        <div className={style.tasksHeader}>
          <h2 className={style.title}>
            Tasks / <span>{allTasks.length}</span>
          </h2>
          <button
            type="button"
            className={style.addTaskBtn}
            onClick={() => setOpenAddTask((prev) => !prev)}
          >
            {!openAddTask ? (
              <>
                <AddIcon className={style.icon} />
                Add Task
              </>
            ) : (
                <>
                <DoDisturbIcon className={style.icon} />
                Close
                </>
            )}
          </button>
        </div>

        <div className="flex justify-center">
          <div className={style.tasksBody}>
            <TasksTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
