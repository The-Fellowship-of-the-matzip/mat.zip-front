import Button from "../Button/Button";
import * as S from "./AutoComplete.style";
import { Link } from "react-router-dom";
import { AutoCompleteOption } from "types/common";

import { PATHNAME } from "constants/routes";

import { OutwardIcon } from "asset";

interface AutoCompleteProps {
  optionList: AutoCompleteOption[];
  onOptionFocus: (option: string) => void;
  closeAutoComplete: () => void;
}

function AutoComplete({
  optionList,
  onOptionFocus,
  closeAutoComplete,
}: AutoCompleteProps) {
  return (
    <S.Container>
      {optionList.map((option) => (
        <Link to={`${PATHNAME.STORE_DETAIL}/${option.id}`} key={option.id}>
          <Button
            value={option.name}
            css={S.buttonStyle}
            onClick={closeAutoComplete}
            onFocus={(e) => onOptionFocus(e.target.value)}
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
