import styled from "styled-components";

const StarContainer = styled.div`
  background-color: transparent;
  border: none;

  font-size: 1.5rem;
  color: ${({ theme }) => theme.yellow};
`;

const EMPTY_STAR_ICON = "\u2606";
const FILLED_STAR_ICON = "\u2605";

function Star({ isFilled = true }) {
  return (
    <StarContainer>
      {isFilled ? FILLED_STAR_ICON : EMPTY_STAR_ICON}
    </StarContainer>
  );
}

export default Star;
