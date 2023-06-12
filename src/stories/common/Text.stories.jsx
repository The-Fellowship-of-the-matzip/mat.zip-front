import { StoryContainer, StoryInfoContainer } from "stories/style";

import Text from "components/common/Text/Text";

export default {
  title: "Components/common/Text",
  component: Text,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xSmall", "small", "medium", "large"],
    },
    children: {
      control: { type: "text" },
    },
    css: {
      control: false,
    },
  },
  args: {
    size: "medium",
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
          <Text size="xSmall">{children}</Text>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Text size="small">{children}</Text>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Text size="medium">{children}</Text>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Text size="large">{children}</Text>
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
  size: "xSmall",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
