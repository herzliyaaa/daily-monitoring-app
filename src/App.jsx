
import Chart from "react-apexcharts";
import Sidebar from "./components/Sidebar";

import { Card, CardContent, CardTitle, CardHeader } from "./components/ui/card";

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
          return "#7E30E1";
        } else {
          return "#7E30E1";
        }
      },
    ],
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
  };
  return (
    <div className="container flex row h-screen w-screen ">
      <div>
        <Sidebar />
      </div>




       <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Card className="bg-[#EBF4EF] border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">1,245</span>
            </CardContent>
          </Card>
          <Card className="bg-[#E9EFFB] border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">645</span>
            </CardContent>
          </Card>
          <Card className="bg-[#EDEBF9] border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle>Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">$24,680</span>
            </CardContent>
          </Card>
          <Card className="bg-[#F9F0E5] border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">87%</span>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 h-96">
        <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
            <Chart options={options} type="bar" series={series} width="100%" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
            <Chart options={options} type="line" series={series} width="100%" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
