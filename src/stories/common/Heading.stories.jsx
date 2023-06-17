import { StoryContainer, StoryInfoContainer } from "stories/style";

import Heading from "components/common/Heading/Heading";

export default {
  title: "Components/common/Heading",
  component: Heading,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
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
          <Heading size="xs">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Heading size="sm">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Heading size="md">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Heading size="lg">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>X Large</h6>
          <Heading size="xl">{children}</Heading>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>XX Large</h6>
          <Heading size="xxl">{children}</Heading>
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

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xl",
};

export const XXLarge = Template.bind({});
XXLarge.args = {
  size: "xxl",
};
