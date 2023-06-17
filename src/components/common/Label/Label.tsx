import * as S from "./Label.style";

interface LabelProps {
  children: string;
  id?: string;
  required?: boolean;
}

function Label({ children, id = "", required = false }: LabelProps) {
  return (
    <S.Label htmlFor={id}>
      {children} {required && <S.Required>*</S.Required>}
    </S.Label>
  );
}

export default Label;
