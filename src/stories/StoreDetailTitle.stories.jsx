import StoreDetailTitle from "components/pages/StoreDetailPage/StoreDetailTitle/StoreDetailTitle";

export default {
  title: "Components/pages/StoreDetailPage/StoreDetailTitle",
  component: StoreDetailTitle,
  argTypes: {
    storeInfo: { controls: "object" },
  },
};

const Template = (args) => <StoreDetailTitle {...args} />;
export const Default = Template.bind({});

Default.args = {
  storeInfo: {
    name: "노랑 통닭",
    rating: 4.8,
    desc: "호랑이 치킨 가계 예시 문구문구 rmfwktn xptmxm djfa ddfaksjflskjflksjflakjsdlfjsaldfjlskjflksdjflksjdflkjsldfkjsdlkj",
  },
};
