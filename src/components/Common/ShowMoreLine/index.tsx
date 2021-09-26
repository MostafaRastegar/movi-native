import React from "react";
import { View, Text } from "react-native";
import gs from "src/constants/theme/GlobalStyle";
import { MaterialIcons } from "@expo/vector-icons";

export interface PropsI {
  children: React.ReactNode;
  title: string;
  link: string;
  style: { [key: string]: any };
}

const ShowMoreLine = ({ children, title, link, style }: PropsI) => (
  <View style={[gs.flex, gs.flexCol, style]}>
    <View style={[gs.flex, gs.flexRow, gs.alignItemsCenter, gs.justifyCenter]}>
      <Text style={[gs.textWhite, gs.fontBold]}>{title}</Text>
      <Text style={[gs.textWhite, gs.mlAuto]}>
        <MaterialIcons name="arrow-forward-ios" size={16} color="white" />
      </Text>
    </View>
    <View>{children}</View>
  </View>
);

export default ShowMoreLine;
