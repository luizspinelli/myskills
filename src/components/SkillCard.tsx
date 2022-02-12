import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ISkillCardProps {
  text: string;
}

const SkillCard = ({ text }: ISkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
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
