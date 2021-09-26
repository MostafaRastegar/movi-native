import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, ScrollView, FlatList } from "react-native";
import { moviesEffects, moviesSelectors } from "store/index";
import gs from "constants/theme/GlobalStyle";
import ShowMoreLine from "components/Common/ShowMoreLine";
import MoviCard from "components/Common/MoviCard";
const Home = () => {
  const dispatch = useDispatch();

  const getGenresLoading = useSelector((state) =>
    moviesSelectors.getGenresLoading(state)
  );
  const getGenresData = useSelector((state) =>
    moviesSelectors.getGenresData(state)
  );

  console.log("getGenresData :>> ", getGenresData);
  useEffect(() => {
    dispatch(moviesEffects.getGenresRequest());
  }, []);
  if (getGenresLoading) {
    return <Text style={[gs.textWhite]}>"loading ....."</Text>;
  }
  return (
    <ScrollView>
      <Text style={[gs.textWhite, gs.mb16]}>Genres List</Text>
      <FlatList
        data={getGenresData}
        keyExtractor={(item) => item.genre}
        initialNumToRender={10}
        initialScrollIndex={10}
        renderItem={({ item }) => (
          <ShowMoreLine
            title={item.genre}
            link="http://google.com"
            style={[gs.mb16]}
          >
            <ScrollView horizontal>
              <View style={[gs.mr16]}>
                <MoviCard
                  title="home"
                  link="http://google.com"
                  imageUri="https://reactnative.dev/img/tiny_logo.png"
                />
              </View>
            </ScrollView>
          </ShowMoreLine>
        )}
      ></FlatList>
    </ScrollView>
  );
};

export default Home;
