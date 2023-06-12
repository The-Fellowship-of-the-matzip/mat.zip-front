import { StoryContainer, StoryInfoContainer } from "stories/style";

import Button from "components/common/Button/Button";

export default {
  title: "Components/common/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "primary", "secondary", "textButton", "danger"],
    },
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
    variant: "default",
    size: "medium",
    children: "Button",
  },
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const Variants = {
  render: ({ size, children }) => {
    return (
      <>
        <StoryInfoContainer>
          <h6>Default</h6>
          <Button variant="default" size={size}>
            {children}
          </Button>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Primary</h6>
          <Button variant="primary" size={size}>
            {children}
          </Button>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Secondary</h6>
          <Button variant="secondary" size={size}>
            {children}
          </Button>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Text Button</h6>
          <Button variant="textButton" size={size}>
            {children}
          </Button>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Danger</h6>
          <Button variant="danger" size={size}>
            {children}
          </Button>
        </StoryInfoContainer>
      </>
    );
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
};

export const Sizes = {
  render: ({ variant, children, ...args }) => {
    return (
      <>
        <StoryInfoContainer>
          <h6>Small</h6>
          <Button variant={variant} size="small">
            {children}
          </Button>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Medium</h6>
          <Button variant={variant} size="medium">
            {children}
          </Button>
        </StoryInfoContainer>
        <StoryInfoContainer>
          <h6>Large</h6>
          <Button variant={variant} size="large">
            {children}
          </Button>
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

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: "textButton",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};
