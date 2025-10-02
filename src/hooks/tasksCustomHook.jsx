// react
import { useContext } from "react";

// local
import { tasksContext } from "../context/tasksContext";
import { API_BASE_TASKS_URL } from "../config";

function UseTasks() {
  const {
    tasks: allTasks,
    setTasks,
    checkedIds,
    setCheckedIds,
    } = useContext(tasksContext);

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
          return updatedTask;
        } catch (err) {
          console.error(err);
        }
    }


  return [allTasks, setTasks, checkedIds, setCheckedIds, updateData];
}


export default UseTasks;