import * as S from "./Toast.styled";

interface ToastProps {
  message: string;
  isOpen: boolean;
}

const Toast = ({ message, isOpen }: ToastProps) => {
  console.log(isOpen);
  return <S.ToastContainer $isOpen={isOpen}>{message}</S.ToastContainer>;
};

export default Toast;
