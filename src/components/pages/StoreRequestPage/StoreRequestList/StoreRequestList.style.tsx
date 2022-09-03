import styled from "styled-components";

export const Container = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  height: 3rem;
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem;
`;

export const ListHead = styled(ListItem)`
  font-weight: 500;
  border-bottom: 0.065rem solid ${({ theme }) => theme.secondary};
`;

export const ListData = styled.div`
  text-align: center;
`;

export const CategoryRow = styled(ListData)`
  width: 30%;
`;

export const StoreNameRow = styled(ListData)`
  width: 50%;
`;

export const RegisteredRow = styled(ListData)`
  width: 20%;
`;
