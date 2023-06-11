import styled from "styled-components";

export const Container = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem;
`;

export const ListHead = styled(ListItem)`
  font-weight: 500;
  border-bottom: 0.065rem solid ${({ theme }) => theme.color.gray200};
`;

export const ListData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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

export const ShowDetailButton = styled.button`
  background-color: ${({ theme }) => theme.color.gray600};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.2rem;
  box-shadow: 1px 1px 1px #8d8d8d;
  font-size: 0.8rem;
`;
