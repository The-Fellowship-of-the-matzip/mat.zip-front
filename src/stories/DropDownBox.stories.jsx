import { useState } from "react";

import DropDownBox from "components/common/DropDownBox/DropDownBox";

export default {
  title: "Components/common/DropDownBox",
  component: DropDownBox,
};

const Template = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <button onClick={handleButtonClick}>드롭박스 열기</button>
      {isOpen && <DropDownBox {...props} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "hihi",
  top: "30px",
  left: "0",
};
Default.parameters = { controls: { exclude: ["buttonRef", "onClose"] } };
