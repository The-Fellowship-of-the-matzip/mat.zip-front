import { MdArrowBackIos } from "react-icons/md";

import SectionHeader from "components/common/SectionHeader/SectionHeader";

export default {
  title: "Components/common/SectionHeader",
  component: SectionHeader,
  argTypes: {
    children: { controls: "text" },
    leadingIcon: { controls: "text" },
  },
};

const Template = (args) => <SectionHeader {...args} />;

export const WithLeadingButton = Template.bind({});
WithLeadingButton.args = {
  children: "한식",
  leadingIcon: <MdArrowBackIos />,
};
WithLeadingButton.parameters = {
  controls: { exclude: ["leadingIcon"] },
};

export const WithoutLeadingButton = Template.bind({});
WithoutLeadingButton.args = {
  children: "카테고리",
  leadingIcon: "",
};
WithoutLeadingButton.parameters = {
  controls: { exclude: ["leadingIcon"] },
};
