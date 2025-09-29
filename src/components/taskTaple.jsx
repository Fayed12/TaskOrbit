// mui
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// local hook
import UseTasks from "../hooks/tasksCustomHook";

function TasksTable() {
    const [tasks] = UseTasks(); 
    
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "priority", headerName: "Priority", width: 130 },
    { field: "dueDate", headerName: "Due Date", width: 150 },
    {
      field: "completed",
      headerName: "Completed",
      width: 130,
      renderCell: (params) => (params.value ? "✅ Done" : "❌ Pending"),
    },
  ];

  return (
    <div>
      <DataGrid
        rows={tasks}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={5}
        rowsPerPageOptions={[1, 5, 10]}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}

export default TasksTable;
