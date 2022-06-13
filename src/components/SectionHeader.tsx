import styled from "styled-components";

interface SectionHeaderProps {
  children: string;
  leadingIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MiniHeader = styled.h2`
  padding: 0.2em;

  font-size: 1.25rem;
`;

const LeadingButton = styled.button`
  margin-right: 0.5em;

  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
`;

function SectionHeader({ children, leadingIcon, onClick }: SectionHeaderProps) {
  return (
    <MiniHeader>
      {leadingIcon && (
        <LeadingButton onClick={onClick}>{leadingIcon}</LeadingButton>
      )}
      {children}
    </MiniHeader>
  );
}

export default SectionHeader;
