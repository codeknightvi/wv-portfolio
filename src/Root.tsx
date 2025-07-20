import { Outlet } from "react-router-dom";
import Toast from "@components/Toast";
import { ToastProvider, ToastContext } from "context/toast";
import { useContext } from "react";
import Navbar from "@components/Navbar";

function Layout() {
  const toastContext = useContext(ToastContext);

  return (
    <div className="h-full">
      {toastContext?.isToastOpen && <Toast />}
      <Navbar />
      <div className="p-10 pt-[100px] min-h-[calc(100vh)] bg-white">
        <Outlet />
      </div>
    </div>
  );
}

export default function Root() {
  return (
    <ToastProvider>
      <Layout />
    </ToastProvider>
  );
}
