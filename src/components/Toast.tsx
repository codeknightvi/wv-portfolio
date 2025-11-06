import { ToastContext } from "context/toast";
import { useContext } from "react";

export default function Toast() {
  const toastContext = useContext(ToastContext);

  return (
    <div className="toast bg-primary border rounded-2xl border-secondary p-4 text-secondary text-center">
      <div
        className="cursor-pointer text-right"
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
