import styled, { css } from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    margin-bottom: ${({ theme }) => theme.spacer.spacing1};
    color: ${({ theme }) => theme.color.primaryDark};
    font-weight: bold;
  }
`;

export const DetailContainer = styled.ul``;

export const DetailItem = styled.li`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacer.spacing3};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailHead = styled(DetailItem)`
  padding-bottom: ${({ theme }) => theme.spacer.spacing3};
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
`;

export const DetailData = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthorNameRow = styled(DetailData)`
  width: 40%;
`;

export const CategoryNameRow = styled(DetailData)`
  width: 40%;
`;

export const RegisteredRow = styled(DetailData)`
  width: 20%;
`;

export const CloseButtonStyling = css`
  position: absolute;
  top: ${({ theme }) => theme.spacer.spacing3};
  right: ${({ theme }) => theme.spacer.spacing3};
`;

export const ButtonContainerStyling = css`
  margin-top: ${({ theme }) => theme.spacer.spacing4};
  display: flex;
  gap: ${({ theme }) => theme.spacer.spacing1};
`;
