import React from "react";
import { View, Text, Image } from "react-native";
import gs from "src/constants/theme/GlobalStyle";

export interface PropsI {
  imageUri?: string;
  title: string;
  link: string;
}

const MoviCard = ({ imageUri, title, link }: PropsI) => (
  <View style={[gs.flex, gs.flexCol, { width: 74 }]}>
    <Image
      style={{ width: 74, height: 110 }}
      source={{
        uri: imageUri,
      }}
    />
    <Text
      style={[
        gs.textWhite,
        gs.fontLight,
        gs.overflowHidden,
        { height: 40, backgroundColor: "red" },
      ]}
    >
      {title}
    </Text>
  </View>
);

export default MoviCard;
