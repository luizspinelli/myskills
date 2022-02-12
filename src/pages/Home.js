import React, { useState, useCallback } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

const Home = () => {
  const [newSkill, setNewSkill] = useState("");

  const [skills, setSkills] = useState([]);

  const handleAddSkill = useCallback(() => {
    setSkills((old) => [...old, newSkill]);
    setNewSkill("");
  }, [newSkill]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Welcome, Luiz </Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
          value={newSkill}
        />
        <Button onPress={handleAddSkill} text="Add" />
        <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
        <FlatList
          data={skills}
          keyExtractor={(item, n) => n}
          renderItem={({ item }) => <SkillCard text={item} />}
        />
      </SafeAreaView>
    </>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
