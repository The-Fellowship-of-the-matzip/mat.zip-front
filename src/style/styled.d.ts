import { ColorTypes, SpacerTypes, BorderRadiusType, ZIndexType } from "./Theme";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorTypes;
    spacer: SpacerTypes;
    borderRadius: BorderRadiusType;
    zIndex: ZIndexType;
  }
}
