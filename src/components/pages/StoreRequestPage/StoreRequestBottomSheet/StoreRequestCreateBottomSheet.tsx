import { AxiosError } from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";

import { NETWORK } from "constants/api";
import { Campus, getCampusId } from "constants/campus";
import { categories } from "constants/categories";
import MESSAGES from "constants/messages";

import { campusContext } from "context/CampusContextProvider";

import useLogin from "hooks/useLogin";

import sendStoreRequestPostRequest from "api/sendStoreRequestPostRequest";

import BottomSheet from "components/common/BottomSheet/BottomSheet";

import * as S from "components/pages/StoreRequestPage/StoreRequestBottomSheet/StoreRequestBottomSheet.style";

interface Props {
  closeSheet: () => void;
  refetchList: () => void;
}

function StoreRequestCreateBottomSheet({ closeSheet, refetchList }: Props) {
  const { logout } = useLogin();
  const campus = useContext(campusContext);

  const categoryOptions = Object.entries(categories).map(([id, name]) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const categoryId = formData.get("categoryId") as string;

    if (!name || !categoryId) {
      alert("모든 항목을 작성해주세요!");
      return;
    }

    mutation.mutate({ name, categoryId });
  };

  const handleSuccess = () => {
    closeSheet();
    refetchList();
  };

  const handleSubmitError = (error: AxiosError) => {
    if (error.code === "401") {
      alert(MESSAGES.TOKEN_EXPIRED);
      logout();
    }
  };

  const mutation = useMutation<
    unknown,
    AxiosError,
    { categoryId: string; name: string }
  >(sendStoreRequestPostRequest(getCampusId(campus as Campus)), {
    onSuccess: handleSuccess,
    onError: handleSubmitError,
    retry: NETWORK.RETRY_COUNT,
  });

  return (
    <BottomSheet title="식당 추가 요청하기" closeSheet={closeSheet}>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>
          카테고리
          <S.Select name="categoryId">{categoryOptions}</S.Select>
        </S.Label>
        <S.Label>
          맛집 이름
          <S.NameInput name="name" placeholder="맛집의 이름을 입력해주세요" />
        </S.Label>
        <S.SubmitButton>요청 보내기</S.SubmitButton>
      </S.Form>
    </BottomSheet>
  );
}

export default StoreRequestCreateBottomSheet;
