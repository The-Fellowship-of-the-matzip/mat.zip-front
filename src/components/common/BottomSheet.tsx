import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const Container = styled.section``;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.black};
  opacity: 0.5;

  position: fixed;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  min-height: 100px;
  padding: 1.5em;

  border-radius: 10px 10px 0px 0px;

  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px -2px 13px 1px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1``;

const InputWrapper = styled.div``;

type Props = {
  title: string;
  children: React.ReactNode;
  closeSheet: () => void;
};

function BottomSheet({ title, closeSheet, children }: Props) {
  return ReactDOM.createPortal(
    <Container>
      <Backdrop onClick={closeSheet} />
      <Content>
        <Title>{title}</Title>
        <InputWrapper>{children}</InputWrapper>
      </Content>
    </Container>,
    document.querySelector("#root") as HTMLElement
  );
}

export default BottomSheet;
