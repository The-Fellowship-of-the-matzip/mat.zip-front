import sthWentWrongImage from "asset/sth-went-wrong.svg";

import * as S from "components/common/ErrorImage/ErrorImage.style";

function ErrorImage({
  errorMessage = "문제가 발생했습니다. 관리자에게 문의해주세요.",
}) {
  return (
    <S.ErrorImageContainer>
      <S.ErrorImageSrc
        src={sthWentWrongImage}
        alt="에러 발생시 보이는 이미지"
      />
      <S.ErrorImageText>{errorMessage}</S.ErrorImageText>
    </S.ErrorImageContainer>
  );
}

export default ErrorImage;
