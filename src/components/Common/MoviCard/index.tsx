import React from "react";
import { View, Text, Image } from "react-native";
import gs from "src/constants/theme/GlobalStyle";

export interface PropsI {
  imageUri?: string;
  title: string;
  link: string;
}

const MoviCard = ({ imageUri, title, link }: PropsI) => (
  <View style={[gs.flex, gs.flexCol]}>
    <View style={{ width: 74, height: 110, aspectRatio: 1 * 1.4 }}>
      <Image
        style={{ resizeMode: "cover", width: "100%", height: "100%" }}
        source={{
          uri: imageUri,
        }}
      />
    </View>
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
