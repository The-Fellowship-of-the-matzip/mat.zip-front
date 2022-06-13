import CategoryPage from "../components/CategoryPage";

export default {
  title: "Component/CategoryPage",
  component: CategoryPage,
};

const Template = (args) => <CategoryPage {...args} />;

export const Default = Template.bind({});
