import Star from "components/common/Star/Star";

export default {
  title: "Components/common/Star",
  component: Star,
  argTypes: {
    isFilled: { controls: "boolean" },
  },
};

const Template = (args) => <Star {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFilled: true,
};

export const FilledStar = Template.bind({});
FilledStar.args = {
  isFilled: true,
};
FilledStar.parameters = { controls: { exclude: ["isFilled"] } };

export const OutlinedStar = Template.bind({});
OutlinedStar.args = {
  isFilled: false,
};
OutlinedStar.parameters = { controls: { exclude: ["isFilled"] } };
