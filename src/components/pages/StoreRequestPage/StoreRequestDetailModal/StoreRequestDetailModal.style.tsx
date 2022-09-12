import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StoreName = styled.h1`
  word-break: keep-all;
  text-align: center;
`;

export const Campus = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
`;

export const DetailContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const DetailLabel = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
`;

export const DetailValue = styled.p``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.8rem;
  box-shadow: 1px 1px 1px #8d8d8d;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DeleteButton = styled(CustomButton)`
  background-color: #d66363;
`;
