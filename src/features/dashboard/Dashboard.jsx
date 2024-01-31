import React from "react";
import Chart from "react-apexcharts";

export default function Dashboard() {
  const generateChartData = (name, data) => {
    return {
      series: [{ name, data }],
      options: {
        chart: {
          id: `${name.toLowerCase()}-chart`,
        },
        xaxis: {
          categories: ["M", "T", "W", "Th", "F"],
        },
      },
    };
  };

  const expenseCount = [
    {
      id: 1,
      count: 150,
    },
    {
      id: 2,
      count: 100,
    },
    {
      id: 3,
      count: 230,
    },
    {
      id: 4,
      count: 250,
    },
    {
      id: 5,
      count: 300,
    },
  ];
  const countArray = expenseCount.map((item) => item.count);

  const expenseChart = generateChartData("Expenses", countArray);
  const attendanceChart = generateChartData("Attendance", [30, 45, 60, 75, 90]);
  const revenueChart = generateChartData("Revenue", [100, 150, 120, 180, 200]);

  return (
    <>
      <div className='header'>
        <h2>Dashboard</h2>
      </div>

      <div className='charts'>
        <Chart
          options={expenseChart.options}
          type='bar'
          series={expenseChart.series}
          width='100%'
        />
        <Chart
          options={attendanceChart.options}
          type='bar'
          series={attendanceChart.series}
          width='100%'
        />
        <Chart
          options={revenueChart.options}
          type='bar'
          series={revenueChart.series}
          width='100%'
        />
      </div>
    </>
  );
}
