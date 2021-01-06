import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const StyledButtons = ({type,content,handleChange}) => {
  // const type = props.type;
  // const content = props.content
  // const handleChange = props.handleChange

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  return (
    <View style={(styles.container)}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress = {() => {handleChange()}}
      >
        <Text style={([styles.text, { color: textColor }])}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButtons;
