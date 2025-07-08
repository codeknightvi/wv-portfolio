import { ToastContext } from "context/toast";
import { useContext } from "react";

export default function Toast() {
  const toastContext = useContext(ToastContext);

  return (
    <div className="toast fixed top-10 right-[50%] z-100 bg-red-500 p-5">
      <div
        className="cursor-pointer text-primary text-right"
        onClick={() => {
          toastContext?.action.closeToast();
        }}
      >
        X
      </div>
      {toastContext?.toastMessage}
    </div>
  );
}
