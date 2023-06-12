import { StoryContainer, StoryInfoContainer } from "stories/style";

import Textarea from "components/common/Textarea/Textarea";

export default {
  title: "Components/common/Textarea",
  component: Textarea,
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

const Template = (args) => <Textarea {...args} />;

export const Sizes = {
  render: ({ children, ...args }) => {
    return (
      <>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Textarea $size="small" {...args} />
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Textarea $size="medium" {...args} />
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Textarea $size="large" {...args} />
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
