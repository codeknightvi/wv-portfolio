import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";

export default function Root() {
  return (
    <div className="h-[calc(100vh-100px)]">
      <Navbar />
      <div className="p-10 pt-[100px] h-[calc(100vh-100px)] bg-white">
        <Outlet />
      </div>
    </div>
  );
}
