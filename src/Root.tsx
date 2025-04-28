import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";

export default function Root() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="p-10 pt-[100px] min-h-[calc(100vh)] bg-white">
        <Outlet />
      </div>
    </div>
  );
}
