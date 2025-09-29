// react
import { useContext } from "react";

// local
import { tasksContext } from "../context/tasksContext";

function UseTasks() {
    const { tasks: allTasks, setTasks } = useContext(tasksContext);

    return [allTasks, setTasks];
}

export default UseTasks;