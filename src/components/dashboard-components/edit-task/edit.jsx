// MUI
import ClearableProp from "../../dateAddTask";

// toast
import toast from "react-hot-toast";

// local
import MainInput from "../../input";
import style from "./edit.module.css";
import UseTasks from "../../../hooks/tasksCustomHook";

function EditTask({ taskId, newTask, setNewTask, closePopup }) {
  const [, , updateData] = UseTasks();
  
  // Verify that all fields have been successfully filled in.
  function handleFieldsAreFilledIn() {
    if (!newTask.title) {
      toast.error("please write your new title!!", {
        id: "newTask-toast",
      });
      return false;
    }
    if (!newTask.dueDate) {
      toast.error("please write your new due Date!!", {
        id: "newTask-toast",
      });
      return false;
    }
    console.log(true);
    return true;
  }

  // save new data to json file
  async function handleSaveDataInJSONFile() {
    updateData(taskId, {
      title: newTask.title,
      dueDate: newTask.dueDate,
    });
  }

  // handle save function
  async function handleSaveNewData() {
    if ( await( !handleFieldsAreFilledIn())) return;
    toast.loading("loading...", { id: "newTask-toast" });
    setTimeout(() => {
      if (!handleSaveDataInJSONFile()) return;
      toast.success("data has been updated successful", {
        id: "newTask-toast",
      });
      setNewTask({
        title: "",
        dueDate: "",
      });
      closePopup()
    }, 2000);
  }

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
              <button type="button" title="save" onClick={handleSaveNewData}>
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
