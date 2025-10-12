import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function TasksEndDateChart({ endDateTasks, notEndDateTasks }) {
  const data = [
    { name: "Ended (Past Due)", value: endDateTasks },
    { name: "Upcoming (Not Due Yet)", value: notEndDateTasks },
  ];

  return (
    <div className="chartContainer">
      <h2>Tasks by Date Status</h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3498db"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            name="Tasks Count"
            cursor="pointer"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TasksEndDateChart;
