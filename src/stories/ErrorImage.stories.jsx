import ErrorImage from "components/common/ErrorImage/ErrorImage";

export default {
  title: "Components/common/ErrorImage",
  component: ErrorImage,
  argTypes: {
    errorMessage: { controls: "text" },
  },
};

const Template = (args) => <ErrorImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  errorMessage: "문제가 발생했습니다. 관리자에게 문의해주세요.",
};
