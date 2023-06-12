import { StoryContainer, StoryInfoContainer } from "stories/style";

import Select from "components/common/Select/Select";

export default {
  title: "Components/common/Select",
  component: Select,
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
    children: [
      <option>option1</option>,
      <option>option2</option>,
      <option>option3</option>,
    ],
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
};

const Template = (args) => <Select {...args} />;

export const Sizes = {
  render: ({ children, ...args }) => {
    return (
      <>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Select $size="small" {...args}>
            {children}
          </Select>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Select $size="medium" {...args}>
            {children}
          </Select>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Select $size="large" {...args}>
            {children}
          </Select>
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

export const Error = Template.bind({});
Error.args = {
  isError: true,
};
