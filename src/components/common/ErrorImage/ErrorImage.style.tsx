import styled from "styled-components";

export const ErrorImageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageSrc = styled.img`
  width: 20rem;
  height: 15rem;
  object-fit: cover;
  object-position: center;
`;

export const ErrorImageText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.secondary};
`;
