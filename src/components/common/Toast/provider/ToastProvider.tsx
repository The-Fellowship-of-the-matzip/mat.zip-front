import Toast from "../Toast";
import {
  ANIMATION_DURATION,
  TOAST_DISPLAY_DURATION,
} from "./ToastProvider.constant";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

import { ToastStatus } from "components/common/Toast/Toast.type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ToastContext = createContext(
  (message: string, type?: ToastStatus) => {}
);

export const useToastContext = () => {
  const value = useContext(ToastContext);

  if (!value) throw new Error("ToastProvider 내부에서 사용해야 합니다.");

  return value;
};

const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ToastStatus>("danger");
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [isRemove, setIsRemove] = useState(true);

  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((message: string, type?: ToastStatus) => {
    setIsRemove(false);
    setIsOpenToast(true);
    setMessage(message);
    setStatus(type ?? "danger");

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsOpenToast(false);
      setTimeout(() => {
        setMessage("");
        setIsRemove(true);
      }, ANIMATION_DURATION);
    }, TOAST_DISPLAY_DURATION);

    toastTimer.current = timer;
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {!isRemove && (
        <Toast type={status} isOpen={isOpenToast} message={message} />
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
