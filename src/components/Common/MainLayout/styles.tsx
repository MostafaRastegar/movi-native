import { View } from "react-native";
import styled from "styled-components/native";
import { color, px } from "constants/theme/helpers";
export const ContainerView = styled(View)`
  padding: ${px(16)};
  background-color: ${color("gray", "dark")};
`;
