// MUI
import ClearableProp from "../../dateAddTask";

// local
import MainInput from "../../input";
import style from "./edit.module.css";

function EditTask({ newTask, setNewTask, closePopup }) {
  return (
    <>
      <div className={style.editTask}>
        <div className={style.editTaskContent}>
          <div className={style.header}>
            <h3>Edit Task</h3>
          </div>
          <div className={style.inputs}>
            <MainInput
              inpType="text"
              inpPlaceholder="Edit Title...."
              inpValue={newTask.title}
              inpSetValue={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
            <ClearableProp newTaskData={newTask} setDateValue={setNewTask} />
            <div className={style.buttons}>
              <button type="button" title="save">
                Save
              </button>
              <button type="button" title="save" onClick={closePopup}>
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTask;
