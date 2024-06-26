import Button from "../Button/Button";
import * as S from "./AutoComplete.style";
import { Link } from "react-router-dom";

import { PATHNAME } from "constants/routes";

import { OutwardIcon } from "asset";

interface AutoCompleteProps {
  optionList: { id: number; name: string }[];
  closeAutoComplete: () => void;
}

function AutoComplete({ optionList, closeAutoComplete }: AutoCompleteProps) {
  return (
    <S.Container>
      {optionList.map((option) => (
        <Link to={`${PATHNAME.STORE_DETAIL}/${option.id}`}>
          <Button
            key={option.id}
            css={S.buttonStyle}
            onClick={closeAutoComplete}
          >
            <span>{option.name}</span>
            <OutwardIcon />
          </Button>
        </Link>
      ))}
    </S.Container>
  );
}

export default AutoComplete;
