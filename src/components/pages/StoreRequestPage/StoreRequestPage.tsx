import { useState, useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "context/LoginContextProvider";

import SectionHeader from "components/common/SectionHeader/SectionHeader";

import StoreRequestBottomSheet from "components/pages/StoreRequestPage/StoreRequestBottomSheet/StoreRequestBottomSheet";
import StoreRequestList from "components/pages/StoreRequestPage/StoreRequestList/StoreRequestList";
import * as S from "components/pages/StoreRequestPage/StoreRequestPage.style";

import { StoreRequests } from "mock/data";

function StoreRequestPage() {
  const isLoggedIn = useContext(LoginContext);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();

  const handleRequestSheetOpen = () => {
    if (!isLoggedIn) {
      alert("로그인 후 작성해주세요");
      return;
    }
    setSheetOpen(true);
  };
  return (
    <S.Container>
      <S.CreateRequestButton onClick={handleRequestSheetOpen}>
        요청하기
      </S.CreateRequestButton>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        식당 추가 요청 게시판
      </SectionHeader>
      <StoreRequestList storeRequests={StoreRequests} />
      {isSheetOpen && (
        <StoreRequestBottomSheet closeSheet={() => setSheetOpen(false)} />
      )}
    </S.Container>
  );
}

export default StoreRequestPage;
