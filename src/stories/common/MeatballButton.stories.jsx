import MeatballButton from "components/common/MeatballButton/MeatballButton";

export default {
  title: "Components/common/MeatballButton",
  component: MeatballButton,
  argTypes: {
    isFilled: { controls: "boolean" },
  },
};

const Template = (props) => <MeatballButton {...props} />;

export const Default = Template.bind({});
Default.args = {
  ariaLabel: "미트볼버튼",
  onClick: () => {
    alert("안녕 클릭했구나");
  },
};
