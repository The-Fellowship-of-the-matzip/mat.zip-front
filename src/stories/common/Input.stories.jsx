import { StoryContainer, StoryInfoContainer } from "stories/style";

import Input from "components/common/Input/Input";

export default {
  title: "Components/common/Input",
  component: Input,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    children: {
      control: { type: "text" },
    },
    css: {
      control: false,
    },
  },
  args: {
    $size: "medium",
    label: "Label",
    placeholder: "Placeholder",
    supportingText: "Supporting text",
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
};

const Template = (args) => <Input {...args} />;

export const Sizes = {
  render: ({ children, ...args }) => {
    return (
      <>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Input $size="small" {...args} />
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Input $size="medium" {...args} />
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Input $size="large" {...args} />
        </StoryInfoContainer>
      </>
    );
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  label: undefined,
  supportingText: undefined,
};

export const Label = Template.bind({});
Label.args = {
  supportingText: undefined,
};

export const SupportingText = Template.bind({});

export const IsError = Template.bind({});
Error.args = {
  isError: true,
};
