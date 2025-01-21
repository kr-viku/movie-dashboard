import React from "react";
import { Pie } from "react-chartjs-2";

const CountryLanguageInsights = ({ data }) => {
  // Extract countries and languages
  const countryCounts = {};
  const languageCounts = {};

  data.forEach((movie) => {
    movie.country.forEach((country) => {
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    });
    movie.language.forEach((language) => {
      languageCounts[language] = (languageCounts[language] || 0) + 1;
    });
  });

  // Prepare data for pie charts
  const countryData = {
    labels: Object.keys(countryCounts),
    datasets: [
      {
        data: Object.values(countryCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FFC107",
        ],
      },
    ],
  };

  const languageData = {
    labels: Object.keys(languageCounts),
    datasets: [
      {
        data: Object.values(languageCounts),
        backgroundColor: [
          "#8E44AD",
          "#3498DB",
          "#2ECC71",
          "#E74C3C",
          "#F1C40F",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Country and Language Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Movies by Country</h3>
          <Pie data={countryData} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Movies by Language</h3>
          <Pie data={languageData} />
        </div>
      </div>
    </div>
  );
};

export default CountryLanguageInsights;
