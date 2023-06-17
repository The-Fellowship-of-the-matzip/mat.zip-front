import Heading from "../Heading/Heading";
import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import * as S from "components/common/BottomSheet/BottomSheet.style";

interface BottomSheetProps {
  title: string;
  children: React.ReactNode;
  closeSheet: () => void;
}

function BottomSheet({ title, closeSheet, children }: BottomSheetProps) {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setScrollOffset(window.scrollY);

    return () => {
      document.body.style.overflow = "auto";
      setScrollOffset(0);
    };
  }, []);

  return ReactDOM.createPortal(
    <S.Container scrollOffset={scrollOffset}>
      <S.Backdrop onClick={closeSheet} />
      <S.ContentWrapper>
        <Heading size="xs">{title}</Heading>
        <S.Content>{children}</S.Content>
      </S.ContentWrapper>
    </S.Container>,
    document.querySelector("#app") as HTMLElement
  );
}

export default BottomSheet;
