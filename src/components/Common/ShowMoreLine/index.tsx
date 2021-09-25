import React from "react";
import { View, Text } from "react-native";
import gs from "src/constants/theme/GlobalStyle";

export interface PropsI {
  children: React.ReactNode;
  title: string;
  link: string;
}

const ShowMoreLine = ({ children, title, link }: PropsI) => (
  <View style={[gs.flex, gs.flexCol]}>
    <View style={[gs.flex, gs.flexRow]}>
      <Text style={[gs.textWhite, gs.fontBold]}>{title}</Text>
      <Text style={[gs.textWhite]}>{link}</Text>
    </View>
    <View>{children}</View>
  </View>
);

export default ShowMoreLine;
