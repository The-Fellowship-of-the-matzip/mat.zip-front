import Text from "../Text/Text";
import React from "react";

function ErrorText({ children }: { children: React.ReactNode }) {
  return <Text>{children}</Text>;
}

export default ErrorText;
