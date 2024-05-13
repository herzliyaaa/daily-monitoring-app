import Chart from "react-apexcharts";
import Sidebar from "@/components/Sidebar";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
export const Dashboard = () => {
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
      function ({ value }) {
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
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Dashboard
      </h1>
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

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
};
