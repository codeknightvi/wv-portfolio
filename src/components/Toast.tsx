import { ToastContext } from "context/toast";
import { useContext } from "react";

export default function Toast() {
  const toastContext = useContext(ToastContext);

  return (
    <div className="toast fixed top-10 right-[50%] m-4 h-10 z-100 bg-red-500">
      {toastContext?.toastMessage}
    </div>
  );
}
