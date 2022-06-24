const MESSAGES = {
  LOGIN_REQUIRED: "로그인 후 사용해주세요",
  LOGIN_FAIL: "로그인에 실패했습니다. 다시 시도해주세요.",

  LOGOUT_CONFIRM: "로그아웃 하시겠습니까?",
  LOGOUT_COMPLETE: "로그아웃 하였습니다.",

  CAMPUS_CHANGE_CONFIRM: (currentCampus: string) =>
    `현재 선택된 캠퍼스는 ${currentCampus}입니다 캠퍼스를 변경하시겠습니까?`,
  CATEGORY_FIND_FAILED: "카테고리 이름을 불러오지 못했음",

  WRONG_PATH: "잘못된 접근입니다.",
};

export default MESSAGES;
