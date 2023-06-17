import { StoryContainer, StoryInfoContainer } from "stories/style";

import Text from "components/common/Text/Text";

export default {
  title: "Components/common/Text",
  component: Text,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    children: {
      control: { type: "text" },
    },
    css: {
      control: false,
    },
  },
  args: {
    size: "md",
    children: "Text",
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
};

const Template = (args) => <Text {...args} />;

export const Sizes = {
  render: ({ children }) => {
    return (
      <>
        <StoryInfoContainer>
          <h6>X Small</h6>
          <Text size="xs">{children}</Text>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Text size="sm">{children}</Text>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Text size="md">{children}</Text>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Text size="lg">{children}</Text>
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

export const XSmall = Template.bind({});
XSmall.args = {
  size: "xs",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};
