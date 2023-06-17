import CategoryDetailPage from "components/pages/CategoryDetailPage/CategoryDetailPage";

export default {
  title: "Components/pages/CategoryDetailPage/index",
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
