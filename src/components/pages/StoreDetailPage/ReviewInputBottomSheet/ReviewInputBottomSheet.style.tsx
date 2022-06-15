import styled from "styled-components";

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.95rem;
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
`;

export const MenuInput = styled.input`
  width: 100%;

  padding: 0.8rem 1rem;

  border: 0.065rem solid ${({ theme }) => theme.secondary};
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  min-height: 9.5rem;

  padding: 0.8rem 1rem;

  border: 0.065rem solid ${({ theme }) => theme.secondary};

  resize: none;
`;

export const BottomWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.primary};

  border: none;
  border-radius: 0.25rem;

  box-shadow: 0.065rem 0.065rem 0.2rem rgba(0, 0, 0, 0.4);
`;
