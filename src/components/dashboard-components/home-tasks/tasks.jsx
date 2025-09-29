// MUI
import AddIcon from "@mui/icons-material/Add";
import TasksTable from "../../taskTaple";

// local
import style from "./tasks.module.css";
import UseTasks from "../../../hooks/tasksCustomHook";

function Tasks() {
  const [allTasks] = UseTasks();

  return (
    <div className={style.tasksWrapper}>
      <div className={style.tasksHeader}>
        <h2 className={style.title}>Tasks</h2>
        <div className={style.taskInfo}>
          <span>
            {allTasks.length} of {allTasks.length} tasks
          </span>
        </div>
        <button type="button" className={style.addTaskBtn}>
          <AddIcon className={style.icon} />
          Add Task
        </button>
      </div>

      <div className={style.tasksBody}>
        <TasksTable />
      </div>
    </div>
  );
}

export default Tasks;
