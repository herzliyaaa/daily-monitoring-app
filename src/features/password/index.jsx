import { Button } from "@/components/ui/button";
import { FileArchiveIcon, FolderCheckIcon } from "lucide-react";
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

export default function PasswordManager() {
  return (
    <div className="container">
      <div className="flex flex-row justify-end items-start gap-2 p-4 m-2">
        <div className="flex justify-center items-center h-10">
          <Button variant="outline" size="icon" className="bg-indigo-700">
            <FolderCheckIcon className="h-4 w-4 text-white" />
          </Button>
        </div>
        <div className="flex justify-center items-center h-10">
          <Button variant="outline" size="icon" className="bg-indigo-800">
            <FileArchiveIcon className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Most Used
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Card className="bg-[url('https://cdn.pixabay.com/photo/2016/04/28/23/53/spotify-1360002_1280.jpg')] bg-cover bg-blur-sm border-none shadow-none">
            <CardHeader className="pb-2">
              <CardTitle>Spotify</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col pt-4">
                <span className="text-sm font-regular text-white">
                  herzliabarangan@gmail.com
                </span>
                <span className="text-sm font-regular text-white">
                  ********
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <div className="flex mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Website</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="text-right">Password</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Spotify</TableCell>
                <TableCell>Music</TableCell>
                <TableCell>herzliaaaa</TableCell>
                <TableCell className="text-right">******</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
