import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButtons from "../../components/StyledButtons";
import styles from "./styles";

const Caritems = (props) => {
  const { name, tagLine, image, extraText } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine}&nbsp;
          <Text style={styles.extraText}>{extraText}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButtons
          type="primary"
          content="Custom Order"
          handleChange={() => {
            console.warn("Custom Order was clicked");
          }}
        />
        <StyledButtons
          type="secondary"
          content="Existing Inventory"
          handleChange={() => {
            console.warn("Existing Inventory was clicked");
          }}
        />
      </View>
    </View>
  );
};

export default Caritems;
