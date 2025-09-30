// react
import { useState } from "react";

// MUI
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { Chip } from "@mui/material";

// local
import UseTasks from "../hooks/tasksCustomHook";
import style from "./dashboard-components/home-tasks/tasks.module.css";

function TasksTable() {
  const [allTasks, , , , updateData] = UseTasks();
  const [hideTasks, setHideTask] = useState(false);
  const apiRef = useGridApiRef();

  function handleUpdateValue(selectedRows) {
    selectedRows.forEach((task) => {
      updateData(task.id, {
        completed: !task.completed,
      });
    });
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, minWidth: 70 },
    { field: "title", headerName: "Title", flex: 1, minWidth: 150 },
    { field: "description", headerName: "Description", flex: 2, minWidth: 200 },
    { field: "dueDate", headerName: "Date", flex: 1, minWidth: 150 },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => {
        let bgColor = "";
        if (params.value === "high") bgColor = "#f44336";
        else if (params.value === "medium") bgColor = "#ff9800";
        else if (params.value === "low") bgColor = "#4caf50";
        return (
          <Chip
            label={params.value}
            size="small"
            sx={{
              bgcolor: bgColor,
              borderRadius: "5px",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
          />
        );
      },
    },
    {
      field: "completed",
      headerName: "Achievement",
      flex: 1,
      minWidth: 120,
      renderCell: (params) =>
        params.value ? (
          <Chip
            label="Done"
            size="small"
            sx={{
              bgcolor: "#4caf50",
              borderRadius: "5px",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
          />
        ) : (
          <Chip
            label="In progress"
            size="small"
            sx={{
              bgcolor: "#ff9800",
              borderRadius: "5px",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
          />
        ),
    },
  ];

  if (hideTasks) {
    return (
      <div className="hidden-tasks ">
        <div className="title flex justify-center items-center">
          <h2>Your journey starts here</h2>
        </div>
        <div className="hide-container w-full flex justify-end items-center ">
          <button
            className={style.hideBtn}
            type="button"
            onClick={() => setHideTask((prev) => !prev)}
          >
            {!hideTasks ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={Array.isArray(allTasks) ? allTasks : []}
        getRowId={(row) => row.id}
        apiRef={apiRef}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        autoHeight
        sx={{
          "& .MuiDataGrid-cell:focus": { outline: "none" },
          "& .MuiDataGrid-columnHeader:focus": { outline: "none" },
        }}
      />
      <div className="hide-container w-full flex justify-end items-center ">
        <button
          className={style.hideBtn}
          type="button"
          onClick={() => setHideTask((prev) => !prev)}
        >
          {!hideTasks ? "Hide Tasks" : "Show Tasks"}
        </button>
        <button
          className={style.hideBtn}
          onClick={() => {
            const selectedRows = Array.from(
              apiRef.current.getSelectedRows().values()
            );
            handleUpdateValue(selectedRows);
          }}
        >
          Replace Task Achievement
        </button>
      </div>
    </div>
  );
}

export default TasksTable;
