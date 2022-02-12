import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface ISkillCardProps extends TouchableOpacityProps {
  text: string;
}

const SkillCard = ({ text, ...rest }: ISkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    borderRadius: 50,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export { SkillCard };
