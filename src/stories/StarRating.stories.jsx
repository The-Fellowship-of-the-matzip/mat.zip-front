import { useState } from "react";

import StarRating from "../components/common/StarRating";

export default {
  title: "Component/StarRating",
  component: StarRating,
};

const Template = () => {
  const [rating, setRating] = useState(4);
  return <StarRating rating={rating} setRating={setRating} />;
};

export const Default = Template.bind({});
