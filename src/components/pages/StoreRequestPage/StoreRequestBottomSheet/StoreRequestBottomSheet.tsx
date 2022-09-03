import { categories } from "constants/categories";

import BottomSheet from "components/common/BottomSheet/BottomSheet";

import * as S from "components/pages/StoreRequestPage/StoreRequestBottomSheet/StoreRequestBottomSheet.style";

interface Props {
  closeSheet: () => void;
}

function StoreRequestBottomSheet({ closeSheet }: Props) {
  const categoryOptions = Object.entries(categories).map(([id, name]) => (
    <option key={id}>{name}</option>
  ));

  return (
    <BottomSheet title="식당 추가 요청하기" closeSheet={closeSheet}>
      <S.Form>
        <S.Label>
          카테고리
          <S.Select>{categoryOptions}</S.Select>
        </S.Label>
        <S.Label>
          맛집 이름
          <S.NameInput />
        </S.Label>
        <S.SubmitButton>요청 보내기</S.SubmitButton>
      </S.Form>
    </BottomSheet>
  );
}

export default StoreRequestBottomSheet;
