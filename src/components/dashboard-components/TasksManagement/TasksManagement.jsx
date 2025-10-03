// local
import style from "../../../pages/dashboard-pages/dashboard-analysis/dashboardAnalysis.module.css"
import UseTasks from "../../../hooks/tasksCustomHook.jsx"

// ==================================================================================================================
function TasksManagement() {
    const [allTasks, setTasks] = UseTasks();
    
    const tasksLIst = allTasks.map((task) => {
        return <li key={task.id}>
            <div className={style.TaskContent}>
                <input type="checkbox" name="checked" />
                <div className={style.taskContent}>
                    <h2>{task.title}</h2>
                    <p>{task.dueDate}</p>
                </div>
                <div className={style.buttons}>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        </li>
    })
    return ( 
        <>
            <div className={style.TasksManagementContent}>
                <div className={style.tasksList}>
                    <ul>
                        {tasksLIst}
                </ul>
                </div>
        </div>
        </>
    );
}

export default TasksManagement;