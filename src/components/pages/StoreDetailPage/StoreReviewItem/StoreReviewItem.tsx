import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { ReviewInputShape, ReviewShape } from "types/common";
import repeatComponent from "util/repeatComponent";

import { PATHNAME } from "constants/routes";
import { MESSAGES } from "constants/messages";

import deleteReviewItem from "api/review/deleteReviewItem";
import sendReviewItem from "api/review/sendReviewItem";

import useLogin from "hooks/useLogin";

import Divider from "components/common/Divider/Divider";
import DropDownBox from "components/common/DropDownBox/DropDownBox";
import MeatballButton from "components/common/MeatballButton/MeatballButton";
import Star from "components/common/Star/Star";
import Text from "components/common/Text/Text";
import { useToastContext } from "components/common/Toast/provider/ToastProvider";

import * as S from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem.style";
import DeleteReviewModal from "components/pages/MyPage/DeleteReviewModal/DeleteReviewModal";
import ReviewBottomSheet from "components/pages/StoreDetailPage/ReviewBottomSheet/ReviewBottomSheet";

type ReviewInfo = ReviewShape & { restaurantId: string };

function StoreReviewItem({ reviewInfo }: { reviewInfo: ReviewInfo }) {
  const queryClient = useQueryClient();

  const showToast = useToastContext();
  const { logout } = useLogin();
  const navigate = useNavigate();

  const deleteMutation = useMutation<unknown, AxiosError, unknown>(
    () =>
      deleteReviewItem({
        restaurantId: reviewInfo.restaurantId,
        articleId: reviewInfo.id,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("reviewDetailStore");
      },
      onError: (error) => {
        if (error.message === MESSAGES.LOGIN_REQUIRED) {
          showToast(error.message);
          logout();
          navigate(PATHNAME.HOME);
        }
      },
    },
  );

  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const { author, rating, content, menu, imageUrl } = reviewInfo;

  const handleMeatballButtonClick = () => setIsDropBoxOpen((prev) => !prev);
  const handleDropBoxClose = () => setIsDropBoxOpen(false);

  const handleReviewUpdateClick = () => {
    setIsBottomSheetOpen(true);
    handleDropBoxClose();
  };

  const handleReviewDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setModalOpen((prev) => !prev);
  };

  const handleReviewModalClick = () => {
    queryClient.invalidateQueries([
      "reviewDetailStore",
      { restaurantId: reviewInfo.restaurantId },
    ]);
  };

  const handleSubmitError = (error: AxiosError) => {
    if (error.message === MESSAGES.LOGIN_REQUIRED) {
      showToast(error.message);
      logout();
      navigate(PATHNAME.HOME);
    }
  };

  const mutation = useMutation<unknown, AxiosError, ReviewInputShape>(
    ({ content, rating, menu, imageUrl }: ReviewInputShape) =>
      sendReviewItem({
        restaurantId: reviewInfo.restaurantId,
        articleId: reviewInfo.id,
        rating,
        menu,
        content,
        imageUrl: imageUrl ?? "",
      }),
    { onSuccess: handleReviewModalClick, onError: handleSubmitError, retry: 0 },
  );

  return (
    <>
      <S.StoreReviewContainer>
        <S.UserProfileImage
          src={author.profileImage}
          alt={`${author.username} 유저의 프로필 이미지`}
        />
        <S.ReviewContentWrapper>
          <S.Header>
            <div>
              <Text css={S.titleTextStyle}>{author.username}</Text>
              <S.UserReviewInfoWrapper>
                <Text css={S.subTextStyle} size="sm">
                  후기
                </Text>
                <Text css={S.subTextNumberStyle} size="sm">
                  {author.reviewCount}
                </Text>
                <Text css={S.subTextStyle} size="sm">
                  별점평균
                </Text>
                <Text css={S.subTextNumberStyle} size="sm">
                  {author.averageRating.toFixed(1)}
                </Text>
              </S.UserReviewInfoWrapper>
            </div>
            {reviewInfo.updatable && (
              <>
                <div>
                  <MeatballButton
                    ariaLabel="수정 삭제 메뉴"
                    onClick={handleMeatballButtonClick}
                  />
                </div>
                {isDropBoxOpen && (
                  <DropDownBox
                    onClose={handleDropBoxClose}
                    right="0"
                    top="24px"
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
                        <Divider />
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
          {isModalOpen && (
            <DeleteReviewModal
              onCloseModal={() => setModalOpen((prev) => !prev)}
              onDeleteReview={() =>
                deleteMutation.mutate({
                  restaurantId: reviewInfo.restaurantId,
                  id: reviewInfo.id,
                })
              }
            />
          )}
          <S.ReviewBottom>
            <S.RatingWrapper>
              {repeatComponent(<Star isFilled size="xs" />, rating)}
              {repeatComponent(<Star size="xs" />, 5 - rating)}
            </S.RatingWrapper>
            <Text css={S.bodyTextStyle} size="sm">
              {content}
            </Text>
            {imageUrl && <S.ReviewImage src={imageUrl} alt="리뷰 이미지" />}
            <Text css={S.menuTextStyle} size="sm">
              {menu}
            </Text>
          </S.ReviewBottom>
        </S.ReviewContentWrapper>
      </S.StoreReviewContainer>
      {isBottomSheetOpen && (
        <ReviewBottomSheet
          defaultReviewItem={reviewInfo}
          closeSheet={() => setIsBottomSheetOpen(false)}
          mutate={mutation.mutate}
        />
      )}
    </>
  );
}

export default StoreReviewItem;
