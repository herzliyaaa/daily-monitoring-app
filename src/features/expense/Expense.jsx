import React from "react";
import Chart from "react-apexcharts";

export default function Expense() {
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
    <>
      <Chart options={options} type='bar' series={series} width='150%' />
      <div>Expense</div>
    </>
  );
}
