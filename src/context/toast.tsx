import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ToastContext = {
  isToastOpen: boolean;
  toastMessage: string;
  action: {
    toggleToast: () => void;
    setToastMessage: Dispatch<SetStateAction<string>>;
  };
};

const ToastContext = createContext<ToastContext | null>(null);

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const toggleToastHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <ToastContext.Provider
      value={{
        isToastOpen: isOpen,
        toastMessage,
        action: { toggleToast: toggleToastHandler, setToastMessage },
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
