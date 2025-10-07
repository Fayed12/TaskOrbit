// react
import { useReducer } from "react";

// sweet alert
import Swal from "sweetalert2";

// local
import style from "../../../pages/dashboard-pages/dashboard-analysis/dashboardAnalysis.module.css";
import UseTasks from "../../../hooks/tasksCustomHook.jsx";
import EditTask from "../edit-task/edit.jsx";

// initialValues
const initialValues = {
  editValues: {
    title: "",
    dueDate: "",
  },
  editCloseBTN: null,
  openID: null,
  checked: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "editValues":
      return {
        ...state,
        editValues: {
          title: action.payload.title,
          dueDate: action.payload.dueDate,
        },
      };
    case "openEdit":
      return {
        ...state,
        editCloseBTN: action.payload,
        openID: action.payload,
      };
    case "closeEdit":
      return {
        ...state,
        editCloseBTN: action.payload,
        openID: action.payload,
      };
    case "checked":
      return {
        ...state,
        checked: action.payload,
      };
    default:
      return;
  }
}
// ==================================================================================================================
function TasksManagement() {
  const [allTasks, , , deleteTask] = UseTasks();
  const [{ editValues, openID, checked }, dispatch] = useReducer(
    reducer,
    initialValues
  );

  // function handle open edit input
  function handleOpenEdit(id) {
    allTasks.map((task) => {
      if (task.id === id) {
        dispatch({ type: "openEdit", payload: id });
      }
    });
  }

  // function close edit input
  function handleCloseEdit(id) {
    allTasks.map((task) => {
      if (task.id === id) {
        dispatch({ type: "closeEdit", payload: null });
      }
    });
  }

  // handle delete task with sweet alert
  function handleDeleteTask(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure to delete this Task?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await deleteTask(id);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success",
              });
            } catch (err) {
              console.log(err.message)
              Swal.fire("Error", "Failed to delete the task!", "error");
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your task is safe :)",
              icon: "error",
            });
          }
        });
    }

  // tasks list
  const tasksLIst = allTasks.map((task) => (
    <li key={task.id}>
      <div className={style.TaskContent}>
        <div className={style.taskDetails}>
          <input
            type="checkbox"
            name="checked"
            checked={checked}
            onChange={(e) =>
              dispatch({ type: "checked", payload: e.target.checked })
            }
          />
          <div className={style.taskContent}>
            <h2>{task.title}</h2>
            <p>{task.dueDate}</p>
          </div>
        </div>
        <div className={style.buttons}>
          <button
            type="button"
            title="edit"
            onClick={() => handleOpenEdit(task.id)}
            className={style.edit}
          >
            Edit
          </button>
          <button
            type="button"
            title="delete"
            className={style.delete}
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
        {openID === task.id && (
          <div className={style.taskEdit}>
            <EditTask
              taskId={task.id}
              newTask={editValues}
              setNewTask={(updatedValues) =>
                dispatch({ type: "editValues", payload: updatedValues })
              }
              closePopup={() => handleCloseEdit(task.id)}
            />
          </div>
        )}
      </div>
    </li>
  ));
  return (
    <>
      <div className={style.TasksManagementContent}>
        <div className={style.listContainer}>
          <ul className={style.tasksList}>{tasksLIst}</ul>
        </div>
      </div>
    </>
  );
}

export default TasksManagement;
