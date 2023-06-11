import { AxiosError } from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";
import type { Campus } from "types/campus";

import { NETWORK } from "constants/api";
import { getCampusId } from "constants/campus";
import { categories } from "constants/categories";
import { MESSAGES } from "constants/messages";

import { campusContext } from "context/CampusContextProvider";

import useLogin from "hooks/useLogin";

import sendStoreDemandPostRequest from "api/store/sendStoreDemandPostRequest";

import BottomSheet from "components/common/BottomSheet/BottomSheet";

import * as S from "components/pages/StoreDemandPage/StoreDemandBottomSheet/StoreDemandBottomSheet.style";

interface Props {
  closeSheet: () => void;
  refetchList: () => void;
}

function StoreDemandCreateBottomSheet({ closeSheet, refetchList }: Props) {
  const { logout } = useLogin();
  const campus = useContext(campusContext);

  const categoryOptions = Object.entries(categories).map(([id, name]) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  const isValidString = (input: unknown): input is string => {
    return typeof input === "string" && input.length !== 0;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const categoryId = formData.get("categoryId");

    if (!isValidString(name) || !isValidString(categoryId)) {
      alert("모든 항목을 작성해주세요!");
      return;
    }

    if (name.length > 50) {
      alert("식당 이름의 최대 길이는 50자입니다.");
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
      alert(MESSAGES.TOKEN_INVALID);
      logout();
    }
  };

  const mutation = useMutation<
    unknown,
    AxiosError,
    { categoryId: string; name: string }
  >(sendStoreDemandPostRequest(getCampusId(campus as Campus)), {
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

export default StoreDemandCreateBottomSheet;
