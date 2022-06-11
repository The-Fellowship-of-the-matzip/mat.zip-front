import Category from "../components/Category";

export default {
  title: "Component/Category",
  component: Category,
  argTypes: {
    categories: { controls: "object" },
  },
};

const categories = [
  { categoryId: 1, desc: "한식" },
  { categoryId: 2, desc: "중식" },
  { categoryId: 3, desc: "일식" },
  { categoryId: 4, desc: "양식" },
  { categoryId: 5, desc: "디저트" },
  { categoryId: 6, desc: "야식" },
  { categoryId: 7, desc: "패스트푸드" },
  { categoryId: 8, desc: "기타" },
];

const Template = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories,
};
