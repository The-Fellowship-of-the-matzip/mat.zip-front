import styled from "styled-components";

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;

  font-size: 1.25rem;
`;

export const MenuInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;

  background-color: transparent;
  border: none;
  border-bottom: 0.065rem solid ${({ theme }) => theme.secondary};
  box-shadow: 0 0 0.1rem ${({ theme }) => theme.secondary} inset;
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  min-height: 9.5rem;
  padding: 0.8rem 1rem;

  background-color: transparent;
  border: none;
  border-bottom: 0.065rem solid ${({ theme }) => theme.secondary};
  box-shadow: 0 0 0.1rem ${({ theme }) => theme.secondary} inset;

  resize: none;
`;

export const BottomWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StarRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SubmitButton = styled.button`
  padding: 1rem;

  font-size: 1.25rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0.065rem 0.065rem 0.2rem rgba(0, 0, 0, 0.4);
`;
