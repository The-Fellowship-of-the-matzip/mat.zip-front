import { StoryContainer, StoryInfoContainer } from "stories/style";

import Heading from "components/common/Heading/Heading";

export default {
  title: "Components/common/Heading",
  component: Heading,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xSmall", "small", "medium", "large", "xLarge", "xxLarge"],
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
    children: "Heading",
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
};

const Template = (args) => <Heading {...args} />;

export const Sizes = {
  render: ({ children }) => {
    return (
      <>
        <StoryInfoContainer>
          <h6>X Small</h6>
          <Heading size="xSmall">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Heading size="small">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Heading size="medium">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Heading size="large">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>X Large</h6>
          <Heading size="xLarge">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>XX Large</h6>
          <Heading size="xxLarge">{children}</Heading>
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

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xLarge",
};

export const XXLarge = Template.bind({});
XXLarge.args = {
  size: "xxLarge",
};
