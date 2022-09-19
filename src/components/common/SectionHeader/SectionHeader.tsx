import * as S from "components/common/SectionHeader/SectionHeader.style";

interface SectionHeaderProps {
  children: string;
  leadingIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function SectionHeader({ children, leadingIcon, onClick }: SectionHeaderProps) {
  return (
    <S.MiniHeader>
      {leadingIcon && (
        <S.LeadingButton onClick={onClick}>{leadingIcon}</S.LeadingButton>
      )}
      {children}
    </S.MiniHeader>
  );
}

export default SectionHeader;
