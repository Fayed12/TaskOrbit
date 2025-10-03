// react
import { useReducer } from "react";

// local
import style from "../../../pages/dashboard-pages/dashboard-analysis/dashboardAnalysis.module.css";
import UseTasks from "../../../hooks/tasksCustomHook.jsx";
import MainInput from "../../input.jsx"

// initialValues
const initialValues = {
    editValues: {},
    editCloseBTN: null,
    openID: null,
    checked: false,
}

function reducer(state, action) {
    switch (action.type) {
      case "editValues":
        return {
          ...state,
          editValues: {
            ...state.editValues,
            [action.payload.id]: action.payload.value,
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
    const [allTasks, setTasks] = UseTasks();
    const [{ editValues, editCloseBTN, openID, checked }, dispatch] =
      useReducer(reducer, initialValues);
    console.log(editCloseBTN);
    // function handle open edit input 
    function handleOpenEdit(id) {
        allTasks.map((task) => {
            if (task.id === id) {
                dispatch({ type: "openEdit" , payload: id })
            }
        })
    }

    // function close edit input
    function handleCloseEdit(id) {
        allTasks.map((task) => {
          if (task.id === id) {
            dispatch({ type: "closeEdit", payload: null });
          }
        });
    }

    // tasks list 
  const tasksLIst = allTasks.map((task) => (
    <li key={task.id}>
      <div className={style.TaskContent}>
        {openID !== task.id ? (
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
        ) : (
          <div className={style.taskEdit}>
            <MainInput
              key={task.id}
              inpType="text"
              inpPlaceholder="Edit Title...."
              inpValue={editValues[task.id] || ""}
              inpSetValue={(e) =>
                dispatch({
                  type: "editValues",
                  payload: { value: e.target.value, id: task.id },
                })
              }
            />
            <button type="button">Save</button>
          </div>
        )}

        <div className={style.buttons}>
          <div>
            {editCloseBTN !== task.id ? (
              <button
                type="button"
                title="edit"
                onClick={() => handleOpenEdit(task.id)}
                className={style.edit}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                title="close"
                onClick={() => handleCloseEdit(task.id)}
                className={style.edit}
              >
                close
              </button>
            )}
          </div>
          {editCloseBTN !== task.id && (
            <button type="button" title="delete" className={style.delete}>
              Delete
            </button>
          )}
        </div>
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
