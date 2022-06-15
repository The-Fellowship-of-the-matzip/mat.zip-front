import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem";

export default {
  title: "Components/pages/StoreDetailPage/StoreReviewItem",
  component: StoreReviewItem,
  argTypes: {
    reviewInfo: { controls: "object" },
  },
};

const Template = (args) => <StoreReviewItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  reviewInfo: {
    userThumbnail: "../logo.svg",
    rating: 4.2,
    desc: "sldkfjalskjflaksjelijlfjdldsafsdafkwlejrflwkfelkjawfejwpef'vjmlckvmlsjdhfljsldkjalskdjflsjdkflksjdljkajfsfs",
    menuName: "호랑이 치킨",
  },
};
