import { Fragment } from "react";

function repeatComponent(component: React.ReactNode, count: number) {
  return Array.from({ length: count }).map((_, index) => (
    <Fragment key={index}>{component}</Fragment>
  ));
}

export default repeatComponent;
