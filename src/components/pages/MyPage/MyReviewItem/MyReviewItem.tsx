import * as S from "./MyReviewItem.style";
import { AxiosError } from "axios";
import { MouseEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { UserReview } from "types/common";
import repeatComponent from "util/repeatComponent";

import { PATHNAME } from "constants/routes";

import deleteReviewItem from "api/review/deleteReviewItem";

import Divider from "components/common/Divider/Divider";
import DropDownBox from "components/common/DropDownBox/DropDownBox";
import MeatballButton from "components/common/MeatballButton/MeatballButton";
import Star from "components/common/Star/Star";
import Text from "components/common/Text/Text";

import ReviewUpdateBottomSheet from "components/pages/StoreDetailPage/ReviewUpdateBottomSheet/ReviewUpdateBottomSheet";

function MyReviewItem({
  id,
  restaurant,
  updatable,
  content,
  rating,
  menu,
}: UserReview) {
  const navigate = useNavigate();

  const deleteMutation = useMutation<unknown, AxiosError, unknown>(() =>
    deleteReviewItem({
      restaurantId: String(restaurant.id),
      articleId: String(id),
    })
  );

  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const queryClient = useQueryClient();

  const handleMeatballButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsDropBoxOpen((prev) => !prev);
  };

  const handleDropBoxClose = () => setIsDropBoxOpen(false);

  const handleReviewUpdateClick = () => {
    setIsBottomSheetOpen(true);
    handleDropBoxClose();
  };

  const handleReviewDeleteClick = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteMutation.mutate({
        restaurantId: restaurant.id,
        id,
      });
    }
  };

  const handleReviewModalClick = () => {
    queryClient.invalidateQueries([
      "reviewDetailStore",
      { restaurantId: restaurant.id },
    ]);
  };
  const reviewInfo = {
    id: String(id),
    restaurantId: String(restaurant.id),
    rating,
    content,
    menu,
  };

  return (
    <>
      <S.StoreReviewContainer>
        <S.StoreImage
          src={restaurant.imageUrl}
          alt={`${restaurant.name} 가게 이미지`}
        />
        <S.ReviewContentWrapper>
          <S.Header
            onClick={() => {
              navigate(`${PATHNAME.STORE_DETAIL}/${restaurant.id}`);
            }}
          >
            <Text css={S.titleTextStyle}>{restaurant.name}</Text>
            {updatable && (
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
          <S.ReviewBottom>
            <S.RatingWrapper>
              {repeatComponent(<Star isFilled size="xs" />, rating)}
              {repeatComponent(<Star size="xs" />, 5 - rating)}
            </S.RatingWrapper>
            <Text css={S.bodyTextStyle} size="sm">
              {content}
            </Text>
            <Text css={S.menuTextStyle} size="sm">
              {menu}
            </Text>
          </S.ReviewBottom>
        </S.ReviewContentWrapper>
      </S.StoreReviewContainer>
      {isBottomSheetOpen && (
        <ReviewUpdateBottomSheet
          closeSheet={() => setIsBottomSheetOpen(false)}
          defaultReviewItem={reviewInfo}
          onSuccess={handleReviewModalClick}
        />
      )}
    </>
  );
}

export default MyReviewItem;
