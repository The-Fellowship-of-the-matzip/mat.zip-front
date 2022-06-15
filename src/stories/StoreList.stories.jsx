import StoreList from "components/common/StoreList";

export default {
  title: "Components/common/StoreList",
  component: StoreList,
  argTypes: {
    stores: { controls: "object" },
  },
};

const Template = (args) => <StoreList {...args} />;

export const Default = Template.bind({});
Default.args = {
  stores: [
    {
      storeId: 1,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "냠냠 치킨",
      campus: "잠실",
      distance: 0.5,
      starCount: 3,
    },
    {
      storeId: 2,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "욤욤 치킨",
      campus: "잠실",
      distance: 0.2,
      starCount: 4,
    },
    {
      storeId: 3,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "념념 치킨",
      campus: "잠실",
      distance: 1,
      starCount: 1,
    },
  ],
};
