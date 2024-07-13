import { AxiosError } from "axios";
import { UseMutateFunction } from "react-query";

import { categories } from "constants/categories";

import BottomSheet from "components/common/BottomSheet/BottomSheet";
import Button from "components/common/Button/Button";
import Input from "components/common/Input/Input";
import Select from "components/common/Select/Select";
import { useToastContext } from "components/common/Toast/provider/ToastProvider";

import * as S from "components/pages/StoreDemandPage/StoreDemandBottomSheet/StoreDemandBottomSheet.style";

const isValidString = (input: unknown): input is string => {
  return typeof input === "string" && input.length !== 0;
};

interface StoreDemandBottomSheetProps {
  initValue?: { categoryId: string; name: string };
  closeSheet: () => void;
  mutate: UseMutateFunction<
    unknown,
    AxiosError<unknown, any>,
    {
      categoryId: string;
      name: string;
    },
    unknown
  >;
}

function StoreDemandBottomSheet({
  mutate,
  initValue,
  closeSheet,
}: StoreDemandBottomSheetProps) {
  const showToast = useToastContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const categoryId = formData.get("categoryId");

    if (!isValidString(name) || !isValidString(categoryId)) {
      showToast("모든 항목을 작성해주세요!");
      return;
    }

    if (name.length > 50) {
      showToast("식당 이름의 최대 길이는 50자입니다.");
      return;
    }

    mutate({ name, categoryId });
  };

  const categoryOptions = Object.entries(categories).map(([id, name]) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));
  return (
    <BottomSheet title="식당 추가 요청하기" closeSheet={closeSheet}>
      <S.Form onSubmit={handleSubmit}>
        <Select
          label="카테고리"
          id="category"
          name="categoryId"
          defaultValue={initValue?.categoryId ?? ""}
          required
        >
          {categoryOptions}
        </Select>
        <Input
          label="맛집 이름"
          id="restaurant-name"
          name="name"
          placeholder="맛집의 이름을 입력해주세요"
          defaultValue={initValue?.name ?? ""}
          required
        />
        <Button variant="primary">요청 보내기</Button>
      </S.Form>
    </BottomSheet>
  );
}

export default StoreDemandBottomSheet;
