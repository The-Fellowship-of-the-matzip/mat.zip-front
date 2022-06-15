import StoreListItem from "components/common/StoreListItem";

export default {
  title: "Components/common/StoreListItem",
  component: StoreListItem,
  argTypes: {
    thumbnailUrl: { controls: "text" },
    name: { controls: "text" },
    campus: { controls: "text" },
    distance: { controls: "number" },
    rating: { controls: "number" },
  },
};

const Template = (args) => <StoreListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  thumbnailUrl:
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  name: "냠냠 치킨",
  campus: "잠실",
  distance: 0.5,
  rating: 3,
};
