import { useState } from "react";
import Chart from "react-apexcharts";
import Sidebar from "./components/Sidebar";
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
    colors: [
      function ({ value, seriesIndex, w }) {
        if (value < 55) {
          return "#332F71";
        } else {
          return "#D9534F";
        }
      },
      function ({ value, seriesIndex, w }) {
        if (value < 111) {
          return "#7E36AF";
        } else {
          return "#D9534F";
        }
      },
    ],
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
  };
  return (
    <div className="container flex row h-100  w-100 ">
      <div>
        <Sidebar />
      </div>

      <div>
        <Chart options={options} type="bar" series={series} width="150%" />
      </div>
    </div>
  );
}

export default App;
