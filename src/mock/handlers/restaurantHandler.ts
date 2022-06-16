import { rest } from "msw";

export const restaurantHandler = [
  rest.get("/api/campuses/:campusId/restaurants", (req, res, ctx) => {
    const categoryId = req.url.searchParams.get("categoryId");
    const page = req.url.searchParams.get("page");
    const size = req.url.searchParams.get("size");

    if (!page || !size) {
      // 이거 메세지랑 상태 코드는 내가 맘대로 넣었음
      return res(ctx.status(400), ctx.json({ message: "잘못된 요청입니다." }));
    }

    if (!categoryId) {
      // 전체 카테고리 조회(최신순)
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 3,
            name: "마담밍",
            address: "서울 강남구 선릉로86길 5-4 1층",
            distance: 1,
            kakaoMapUrl: "https://place.map.kakao.com/18283045",
            imageUrl: "www.image.com",
            rating: 4,
          },
          {
            id: 2,
            name: "뽕나무쟁이 선릉본점",
            address: "서울 강남구 역삼로65길 31",
            distance: 1,
            kakaoMapUrl: "https://place.map.kakao.com/11190567",
            imageUrl: "www.image.com",
            rating: 3,
          },
          {
            id: 1,
            name: "배가무닭볶음탕",
            address: "서울 강남구 선릉로86길 30 1층",
            distance: 1,
            kakaoMapUrl: "https://place.map.kakao.com/733513512",
            imageUrl: "www.image.com",
            rating: 5,
          },
        ])
      );
    }

    // 카테고리별 조회
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 2,
          name: "뽕나무쟁이 선릉본점",
          address: "서울 강남구 역삼로65길 31",
          distance: 1,
          kakaoMapUrl: "https://place.map.kakao.com/11190567",
          imageUrl: "www.image.com",
          rating: 3,
        },
        {
          id: 1,
          name: "배가무닭볶음탕",
          address: "서울 강남구 선릉로86길 30 1층",
          distance: 1,
          kakaoMapUrl: "https://place.map.kakao.com/733513512",
          imageUrl: "www.image.com",
          rating: 5,
        },
      ])
    );
  }),
];
