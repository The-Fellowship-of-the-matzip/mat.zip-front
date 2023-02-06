import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import repeatComponent from "util/repeatComponent";

import defaultProfileImage from "asset/default-profile.svg";

import deleteReviewItem from "api/deleteReviewItem";

import DropDownBox from "components/common/DropDownBox/DropDownBox";
import MeatballButton from "components/common/MeatballButton/MeatballButton";
import Star from "components/common/Star/Star";

import ReviewUpdateBottomSheet from "components/pages/StoreDetailPage/ReviewUpdateBottomSheet/ReviewUpdateBottomSheet";
import * as S from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem.style";

interface StoreReviewItemProps {
  reviewInfo: {
    id: string;
    restaurantId: string;
    author: { username: string; profileImage: string };
    rating: number;
    content: string;
    menu: string;
    updatable: boolean;
  };
}

function StoreReviewItem({ reviewInfo }: StoreReviewItemProps) {
  const deleteMutation = useMutation<unknown, AxiosError, unknown>(() =>
    deleteReviewItem({
      restaurantId: reviewInfo.restaurantId,
      articleId: reviewInfo.id,
    })
  );

  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const queryClient = useQueryClient();

  const { author, rating, content, menu } = reviewInfo;

  const handleMeatballButtonClick = () => setIsDropBoxOpen((prev) => !prev);
  const handleDropBoxClose = () => setIsDropBoxOpen(false);

  const handleReviewUpdateClick = () => {
    setIsBottomSheetOpen(true);
    handleDropBoxClose();
  };

  const handleReviewDeleteClick = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteMutation.mutate({
        restaurantId: reviewInfo.restaurantId,
        id: reviewInfo.id,
      });
    }
  };

  return (
    <>
      <S.StoreReviewContainer>
        <S.UserProfileImage
          src={author.profileImage}
          alt={`${author.username} 유저의 프로필 이미지`}
          customDefaultImage={defaultProfileImage}
        />
        <S.ReviewContentWrapper>
          <S.Header>
            <div>{author.username}</div>
            {reviewInfo.updatable && (
              <>
                <S.MeatballButtonContainer>
                  <MeatballButton
                    ariaLabel="수정 삭제 메뉴"
                    onClick={handleMeatballButtonClick}
                  />
                </S.MeatballButtonContainer>
                {isDropBoxOpen && (
                  <DropDownBox
                    onClose={handleDropBoxClose}
                    right="-20px"
                    top="20px"
                  >
                    <S.DropBoxButtonList>
                      <li>
                        <S.DropBoxButton
                          type="button"
                          onClick={handleReviewUpdateClick}
                        >
                          수정
                        </S.DropBoxButton>
                      </li>
                      <li>
                        <S.DropBoxButton
                          type="button"
                          onClick={handleReviewDeleteClick}
                        >
                          삭제
                        </S.DropBoxButton>
                      </li>
                    </S.DropBoxButtonList>
                  </DropDownBox>
                )}
              </>
            )}
          </S.Header>
          <S.ReviewBottom>
            <div>{repeatComponent(<Star isFilled />, rating)}</div>
            <S.ContentWrapper>{content}</S.ContentWrapper>
            <S.MenuWrapper>{menu}</S.MenuWrapper>
          </S.ReviewBottom>
        </S.ReviewContentWrapper>
      </S.StoreReviewContainer>
      {isBottomSheetOpen && (
        <ReviewUpdateBottomSheet
          closeSheet={() => setIsBottomSheetOpen(false)}
          defaultReviewItem={reviewInfo}
          onSuccess={() => {
            queryClient.invalidateQueries([
              "reviewDetailStore",
              { restaurantId: reviewInfo.restaurantId },
            ]);
          }}
        />
      )}
    </>
  );
}

export default StoreReviewItem;
