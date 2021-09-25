import React from "react";
import gs from "src/constants/theme/GlobalStyle";

export interface PropsI {
  children: React.ReactNode;
}
import { ContainerView } from "./styles";

const MainLayout = ({ children }: PropsI) => (
  <ContainerView style={[gs.flex, gs.flexCol, gs.flex1]}>
    {children}
  </ContainerView>
);

export default MainLayout;
