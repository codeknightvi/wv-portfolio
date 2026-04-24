import { ToastContext } from "context/toast";
import { useContext } from "react";

export default function Toast() {
  const toastReducer = useContext(ToastContext);

  return (
    <div className="toast bg-primary text-primary-foreground border-secondary rounded-2xl border p-4 pt-1 text-center">
      <button
        className="w-full cursor-pointer text-end"
        onClick={() => toastReducer?.action.closeToast()}
        aria-label="Close"
      >
        X
      </button>

      <div className="flex flex-col gap-1">
        <div>{toastReducer?.toastMessage}</div>
        <div className="text-sm opacity-80">is set to clipboard</div>
      </div>
    </div>
  );
}
