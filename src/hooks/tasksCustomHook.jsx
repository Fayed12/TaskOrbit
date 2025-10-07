// react
import { useContext } from "react";

// local
import { tasksContext } from "../context/tasksContext";
import { API_BASE_TASKS_URL } from "../config";

// ==================================================================================================================
function UseTasks() {
  const { tasks: allTasks,setTasks } = useContext(tasksContext);

    // update function
    async function updateData(id,updatingData) {
        try {
          const res = await fetch(`${API_BASE_TASKS_URL}/${String(id)}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatingData),
          });
          if (!res.ok) throw new Error("Update failed");
          const updatedTask = await res.json();
          setTasks((prev) =>
            prev.map((task) => (task.id === id ? updatedTask : task))
          );
          // return updatedTask;
        } catch (err) {
          console.error(err);
        }
    }

  // delete task from JSON
  async function deleteTask(id) {
    try {
      const res = await fetch(`${API_BASE_TASKS_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("something error in fetching Data")
      }
      setTasks((prev) => prev.filter((task) => {
        return task.id !== id
      }));
    } catch (err) {
          console.error(err);
    }
  }
  
  return [allTasks, setTasks, updateData, deleteTask];
}


export default UseTasks;