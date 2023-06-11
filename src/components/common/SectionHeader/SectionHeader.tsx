import Heading from "../Heading/Heading";

import * as S from "components/common/SectionHeader/SectionHeader.style";

interface SectionHeaderProps {
  children: string;
  leadingIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function SectionHeader({ children, leadingIcon, onClick }: SectionHeaderProps) {
  return (
    <S.Header>
      {leadingIcon && (
        <S.LeadingButton onClick={onClick}>{leadingIcon}</S.LeadingButton>
      )}
      <Heading size="xSmall">{children}</Heading>
    </S.Header>
  );
}

export default SectionHeader;
