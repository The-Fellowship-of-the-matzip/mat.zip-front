import styled from "styled-components";

export const ErrorImageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled.img`
  min-width: 24rem;
  height: 16rem;
  margin-bottom: ${({ theme }) => theme.spacer.spacing2};
  object-fit: cover;
  object-position: center;
`;

export const ErrorImageText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.secondary};
`;
