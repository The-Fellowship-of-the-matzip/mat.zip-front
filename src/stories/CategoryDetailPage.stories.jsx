import CategoryDetailPage from "../components/CategoryDetailPage";

export default {
  title: "Component/CategoryDetailPage",
  component: CategoryDetailPage,
};

const Template = (args) => <CategoryDetailPage {...args} />;

export const Default = Template.bind({});
