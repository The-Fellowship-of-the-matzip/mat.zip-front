import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import SectionHeader from "components/common/SectionHeader/SectionHeader";

import StoreRequestList from "components/pages/StoreRequestPage/StoreRequestList/StoreRequestList";
import * as S from "components/pages/StoreRequestPage/StoreRequestPage.style";

import { StoreRequests } from "mock/data";

function StoreRequestPage() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <SectionHeader
        leadingIcon={<MdArrowBackIos />}
        onClick={() => {
          navigate(-1);
        }}
      >
        식당 추가 요청 게시판
      </SectionHeader>
      <StoreRequestList storeRequests={StoreRequests} />
    </S.Container>
  );
}

export default StoreRequestPage;
