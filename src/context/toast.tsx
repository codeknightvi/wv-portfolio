import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type ToastContext = {
  isToastOpen: boolean;
  toastMessage: string;
  action: {
    openToast: () => void;
    closeToast: () => void;
    setToastMessage: Dispatch<SetStateAction<string>>;
  };
};

const ToastContext = createContext<ToastContext | null>(null);

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  const openToastHandler = () => {
    setIsOpen(true);
  };

  const closeToastHandler = () => {
    setIsOpen(false);
  };

  return (
    <ToastContext.Provider
      value={{
        isToastOpen: isOpen,
        toastMessage,
        action: {
          openToast: openToastHandler,
          setToastMessage,
          closeToast: closeToastHandler,
        },
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
