import styled from "styled-components";

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
`;

export const MenuInput = styled.input`
  width: 100%;

  padding: 0.8em 1em;

  border: 1px solid ${({ theme }) => theme.secondary};
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;

  padding: 0.8em 1em;

  border: 1px solid ${({ theme }) => theme.secondary};

  resize: none;
`;

export const BottomWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  padding: 0.5em 1em;

  background-color: ${({ theme }) => theme.primary};

  border: none;
  border-radius: 4px;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
`;
