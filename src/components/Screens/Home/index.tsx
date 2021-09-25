import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
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

  return (
    <View>
      <Text style={[gs.textWhite]}>Home</Text>
      <ShowMoreLine title="home" link="http://google.com">
        <MoviCard
          title="home"
          link="http://google.com"
          imageUri="https://reactnative.dev/img/tiny_logo.png"
        />
      </ShowMoreLine>
    </View>
  );
};

export default Home;
