import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { moviesEffects, moviesSelectors } from "store/index";
import { StyledUsersWrapper, StyledUsersTitle } from "./styles";
import gs from "constants/theme/GlobalStyle";

const Users = () => {
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
    <>
      <StyledUsersWrapper>
        <StyledUsersTitle style={[gs.fontBold, gs.textCenter]}>
          List Of Names
        </StyledUsersTitle>
        {getGenresLoading ? (
          <Text>Loading ....</Text>
        ) : (
          <View>
            {getGenresData?.map((item) => (
              <Text key={item.genre}>{item?.genre}</Text>
            ))}
          </View>
        )}
      </StyledUsersWrapper>
    </>
  );
};

export default Users;
