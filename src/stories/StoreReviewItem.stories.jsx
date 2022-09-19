import logoSvg from "asset/logo.svg";

import StoreReviewItem from "components/pages/StoreDetailPage/StoreReviewItem/StoreReviewItem";

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
    author: {
      username: "샐리",
      profileImage: logoSvg,
    },
    rating: 4.2,
    content:
      "sldkfjalskjflaksjelijlfjdldsafsdafkwlejrflwkfelkjawfejwpef'vjmlckvmlsjdhfljsldkjalskdjflsjdkflksjdljkajfsfs",
    menu: "호랑이 치킨",
  },
};
