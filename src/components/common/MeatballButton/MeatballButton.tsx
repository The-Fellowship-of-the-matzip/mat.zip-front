import { BiDotsHorizontal } from "react-icons/bi";

import * as S from "components/common/MeatballButton/MeatballButton.style";

export type MeatballButtonProps = {
  ariaLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const MeatballButton: React.FC<MeatballButtonProps> = ({
  ariaLabel,
  onClick,
}) => {
  return (
    <S.MeatballMenuButton
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
    >
      <BiDotsHorizontal size="20" />
    </S.MeatballMenuButton>
  );
};

export default MeatballButton;
