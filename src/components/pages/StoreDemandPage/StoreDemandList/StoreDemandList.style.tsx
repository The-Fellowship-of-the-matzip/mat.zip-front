import styled from "styled-components";

export const Container = styled.ul``;

export const ListItem = styled.li`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacer.spacing3};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListHead = styled(ListItem)`
  padding-bottom: ${({ theme }) => theme.spacer.spacing3};
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
`;

export const ListData = styled.div`
  display: flex;
  justify-content: center;
`;

export const StoreNameRow = styled(ListData)`
  width: 60%;
`;

export const RegisteredRow = styled(ListData)`
  width: 20%;
`;

export const ShowDetailRow = styled(ListData)`
  width: 20%;
`;
