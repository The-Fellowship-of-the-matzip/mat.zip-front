import SearchBar from "../components/common/SearchBar";

export default {
  title: "Component/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
