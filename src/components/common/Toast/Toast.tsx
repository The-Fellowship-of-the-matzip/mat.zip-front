import { ToastStatus } from "components/common/Toast/Toast.type";
import * as S from "./Toast.styled";

interface ToastProps {
  message: string;
  isOpen: boolean;
  type: ToastStatus;
}

const Toast = ({ message, isOpen, type }: ToastProps) => {
  return (
    <S.ToastContainer $type={type} $isOpen={isOpen}>
      {message}
    </S.ToastContainer>
  );
};

export default Toast;
