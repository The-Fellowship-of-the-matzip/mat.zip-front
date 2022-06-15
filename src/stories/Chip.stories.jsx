import Chip from "../components/common/Chip";

export default {
  title: "Component/Chip",
  component: Chip,
  argTypes: {
    children: { controls: "text" },
    isSelected: { controls: "boolean" },
  },
};

const Template = (args) => <Chip {...args} onClick={() => {}} />;

export const Default = Template.bind({});
Default.args = {
  children: "별점 순",
  isSelected: false,
};

export const FilledChip = Template.bind({});
FilledChip.args = {
  children: "별점 순",
  isSelected: true,
};
FilledChip.parameters = { controls: { exclude: ["isSelected"] } };

export const OutlinedChip = Template.bind({});
OutlinedChip.args = {
  children: "별점 순",
  isSelected: false,
};
OutlinedChip.parameters = { controls: { exclude: ["isSelected"] } };
