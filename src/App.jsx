import { useState } from "react";
import Chart from "react-apexcharts";
import "./App.css";

function App() {
  const series = [
    {
      name: "Expenses",
      data: [43, 53, 50, 57, 210],
    },
  ];
  const options = {
    chart: {
      id: "simple-bar",
    },

    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
  };
  return (
    <div>
      <Chart options={options} type="bar" series={series} width="150%" />
  
    </div>
  );
}

export default App;
