import { INPUT_MAX_LENGTH } from "./rules";
import { Campus } from "types/commonTypes";

const MESSAGES = {
  LOGIN_REQUIRED: "로그인 후 사용해주세요",
  LOGIN_FAIL: "로그인에 실패했습니다. 다시 시도해주세요.",

  LOGOUT_CONFIRM: "로그아웃 하시겠습니까?",
  LOGOUT_COMPLETE: "로그아웃 하였습니다.",

  CAMPUS_CHANGE_CONFIRM: (currentCampus: Campus, otherCampus: Campus) =>
    `현재 선택된 캠퍼스는 ${currentCampus}입니다. ${otherCampus} 캠퍼스로 변경하시겠습니까?`,
  CATEGORY_FIND_FAILED: "카테고리 이름을 불러오지 못했습니다.",

  EXCEED_MENU_MAX_LENGTH: `메뉴 이름은 ${INPUT_MAX_LENGTH.MENU}자 이내로 입력해주세요.`,
  EXCEED_REVIEW_CONTENT_MAX_LENGTH: `리뷰는 ${INPUT_MAX_LENGTH.REVIEW_CONTENT}자 이내로 입력해주세요.`,

  TOKEN_INVALID: "유효하지 않은 토큰입니다",
  TOKEN_EXPIRED: "토큰이 만료되었습니다",

  WRONG_PATH: "잘못된 접근입니다.",
};

export default MESSAGES;
