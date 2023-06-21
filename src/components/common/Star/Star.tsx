import * as S from "components/common/Star/Star.style";

function Star({ isFilled = false, isSmall = false }) {
  const size = isSmall ? "16px" : "24px";
  return (
    <S.Star
      width={size}
      height={size}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isFilled ? (
        <path
          d="M12 18.2647L5.07772 21.9042L6.40005 14.1956L0.800049 8.73697L8.53888 7.61315L12 0.599976L15.4612 7.61315L23.2 8.73697L17.6 14.1956L18.9224 21.9042L12 18.2647Z"
          fill="#FFD600"
          stroke="#FFD600"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      ) : (
        <path
          d="M12 18.2647L5.07772 21.9042L6.40005 14.1956L0.800049 8.73697L8.53888 7.61315L12 0.599976L15.4612 7.61315L23.2 8.73697L17.6 14.1956L18.9224 21.9042L12 18.2647Z"
          stroke="#FFD600"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      )}
    </S.Star>
  );
}

export default Star;
