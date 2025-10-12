// recharts
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// styles
import style from "./generalStatistics.module.css";

function TasksCompletionChart({ completed, notCompleted }) {
  const pieData = [
    { name: "Completed Tasks", value: completed },
    { name: "Not Completed Tasks", value: notCompleted },
  ];

  const COLORS = ["#4CAF50", "#E57373"];

  return (
    <div className={style.chartContainer}>
      <h2>Tasks Completion Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TasksCompletionChart;
