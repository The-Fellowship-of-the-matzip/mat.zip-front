import CategoryDetailPage from "../components/pages/CategoryDetailPage";

export default {
  title: "Component/CategoryDetailPage",
  component: CategoryDetailPage,
  argTypes: {
    categoryName: { controls: "text" },
  },
};

const Template = (args) => <CategoryDetailPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  categoryName: "한식",
};
