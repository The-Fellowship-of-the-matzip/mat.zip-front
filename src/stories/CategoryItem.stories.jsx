import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CategoryItem from "components/pages/CategoryPage/CategoryItem";

export default {
  title: "Components/pages/CategoryPage/CategoryItem",
  component: CategoryItem,
  argTypes: {
    width: { controls: "text" },
    children: { controls: "text" },
    buttonText: { controls: "text" },
  },
};

const Template = (args) => <CategoryItem {...args} onClick={() => {}} />;

export const Default = Template.bind({});
Default.args = {
  width: "2.5rem",
  children: "한식",
  buttonText: "한",
};

export const HoverButton = Template.bind({});
HoverButton.args = {
  width: "2.5rem",
  children: "한식",
  buttonText: "한",
};
HoverButton.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.hover(canvas.getByRole("button"));
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  width: "2.5rem",
  children: "한식",
  buttonText: "한",
};
ActiveButton.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
};
