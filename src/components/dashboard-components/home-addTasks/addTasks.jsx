import style from "./addTasks.module.css";

function AddTasks({ openAddTask }) {

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
        <h1>hello</h1>
      </div>
    </>
  );
}

export default AddTasks;
