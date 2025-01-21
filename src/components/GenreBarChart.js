import React from "react";
import { Bar } from "react-chartjs-2";

const GenreBarChart = ({ data }) => {
  // Extract genre counts
  const genreCounts = {};

  data.forEach((movie) => {
    movie.genre.forEach((genre) => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });

  // Prepare data for the bar chart
  const chartData = {
    labels: Object.keys(genreCounts),
    datasets: [
      {
        label: "Number of Movies",
        data: Object.values(genreCounts),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Movies by Genre</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default GenreBarChart;
