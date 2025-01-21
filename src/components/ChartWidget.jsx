import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartWidget = ({ data }) => {
  // Extract year-wise nominations and wins data
  const years = data.map((movie) => movie.year);
  const nominations = data.map((movie) => movie.oscar_nominations);
  const wins = data.map((movie) => movie.oscar_winning);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Nominations",
        data: nominations,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Wins",
        data: wins,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Oscar Statistics Overview</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartWidget;
