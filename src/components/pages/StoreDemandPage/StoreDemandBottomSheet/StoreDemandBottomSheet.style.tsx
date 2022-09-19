import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.1rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
`;

export const NameInput = styled.input`
  padding: 0.5rem;
  line-height: 1.1;
`;

export const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.8rem;
  box-shadow: 1px 1px 1px #8d8d8d;
  font-weight: 600;
`;

export const SubmitButton = styled(CustomButton)`
  width: max-content;
  align-self: flex-end;
`;
