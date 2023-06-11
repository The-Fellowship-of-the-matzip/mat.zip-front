import { DividerProps } from "./Divider";

import styled from "styled-components";

const Divider = styled.div<DividerProps>`
  border-bottom: ${({ thickness }) => thickness}px solid
    ${({ theme }) => theme.color.gray200};
`;

export { Divider };
