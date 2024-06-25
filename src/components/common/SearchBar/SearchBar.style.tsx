import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    left: 16px;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  width: 100%;

  background-color: ${({ theme }) => theme.color.white};

  border: 1px solid ${({ theme }) => theme.color.primaryLight2};
  border-top: 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const inputStyle = css`
  width: 100%;
  height: 5rem;

  background-color: ${({ theme }) => theme.color.primaryLight4};

  border: 1px solid ${({ theme }) => theme.color.primaryLight2};
  border-right: 0px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const dropdownButtonStyle = css`
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.4rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 0;

  font-weight: 500;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.color.primaryLight4};
  }

  &:focus {
    background-color: ${({ theme }) => theme.color.primaryLight4};
    box-shadow: none;
    outline: 0;
  }
`;

export const searchButtonStyle = css`
  width: 5rem;
  height: 5rem;

  background-color: ${({ theme }) => theme.color.primaryLight4};

  border: 1px solid ${({ theme }) => theme.color.primaryLight2};
  border-left: 0px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.color.primaryLight3};
    border-color: ${({ theme }) => theme.color.primaryLight2};
  }

  &:focus {
    box-shadow: none;
    outline: 0;
  }
`;
