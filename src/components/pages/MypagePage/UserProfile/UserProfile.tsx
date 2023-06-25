import * as S from "./UserProfile.style";
import type { UserProfileInformation } from "types/common";

import Text from "components/common/Text/Text";

type UserProfileProps = UserProfileInformation;

function UserProfile({ ...information }: UserProfileProps) {
  return (
    <S.Container>
      <S.ProfileImage src={information.profileImage} alt="프로필 이미지" />
      <S.ContentWrapper>
        <Text css={S.usernameTextStyle}>{information.username}</Text>
        <S.ReviewInfoWrapper>
          <Text css={S.subTextStyle} size="sm">
            후기
          </Text>
          <Text css={S.subTextNumberStyle} size="sm">
            {information.reviewCount}
          </Text>
          <Text css={S.subTextStyle} size="sm">
            별점평균
          </Text>
          <Text css={S.subTextNumberStyle} size="sm">
            {information.ratingAverage}
          </Text>
        </S.ReviewInfoWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default UserProfile;
