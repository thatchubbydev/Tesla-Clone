import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import Caritems from "../Caritems";
import cars from "./cars";
import styles from "./styles";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Caritems car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
