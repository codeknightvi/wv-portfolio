import { Outlet } from "react-router-dom";
import Toast from "@components/Toast";
import { ToastProvider, ToastContext } from "context/toast";
import { useContext, useEffect } from "react";
import Navbar from "@components/Navbar";
import { TooltipProvider } from "@components/ui/tooltip";

function Layout() {
  const toastContext = useContext(ToastContext);

  return (
    <div className="min-h-screen">
      {toastContext?.isToastOpen && <Toast />}

      <Navbar />

      <main className="p-10 pt-[100px]">
        <Outlet />
      </main>
    </div>
  );
}

export default function Root() {
  useEffect(() => {
    const media = globalThis.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = () => {
      const stored = localStorage.getItem("theme");

      if (stored === "light") {
        document.documentElement.classList.remove("dark");
        return;
      }

      if (stored === "dark") {
        document.documentElement.classList.add("dark");
        return;
      }

      document.documentElement.classList.toggle("dark", media.matches);
    };

    syncTheme();
    media.addEventListener("change", syncTheme);

    return () => media.removeEventListener("change", syncTheme);
  }, []);

  return (
    <TooltipProvider>
      <ToastProvider>
        <Layout />
      </ToastProvider>
    </TooltipProvider>
  );
}
