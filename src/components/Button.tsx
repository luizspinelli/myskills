import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacityProps,
} from "react-native";

interface IButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button = ({ text, ...rest }: IButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export { Button };
