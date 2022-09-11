import * as S from "components/common/MeatballButton/MeatballButton.style";

export type MeatballButtonProps = {
  ariaLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const MeatballMenuSvg = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 20 20"
    height="20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
  </svg>
);

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
      <MeatballMenuSvg />
    </S.MeatballMenuButton>
  );
};

export default MeatballButton;
