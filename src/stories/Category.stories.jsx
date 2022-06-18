import Category from "components/pages/CategoryPage/Category/Category";

export default {
  title: "Components/pages/CategoryPage/Category",
  component: Category,
  argTypes: {
    categories: { controls: "object" },
  },
};

const categories = [
  { id: 1, name: "한식" },
  { id: 2, name: "중식" },
  { id: 3, name: "일식" },
  { id: 4, name: "양식" },
  { id: 5, name: "디저트" },
  { id: 6, name: "야식" },
  { id: 7, name: "패스트푸드" },
  { id: 8, name: "기타" },
];

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories,
};
