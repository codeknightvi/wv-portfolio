import { ToastContext } from "context/toast";
import { useContext } from "react";

export default function Toast() {
  const toastReducer = useContext(ToastContext);

  return (
    <div className="toast bg-primary border rounded-2xl border-secondary p-4 pt-1 text-secondary text-center">
      <div
        className="cursor-pointer text-right"
        onClick={() => {
          toastReducer?.action.closeToast();
        }}
      >
        X
      </div>
      <div className="flex flex-col">
        <div>{toastReducer?.toastMessage}</div>
        <div className="text-sm">{"is set to clipboard"}</div>
      </div>
    </div>
  );
}
