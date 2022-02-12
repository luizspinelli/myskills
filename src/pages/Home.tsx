import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface ISkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [greetings, setGreetings] = useState("");

  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<ISkillData[]>([]);

  const handleAddSkill = useCallback(() => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setSkills((old) => [...old, data]);
    setNewSkill("");
  }, [newSkill]);

  useEffect(() => {
    const currentHours = new Date().getHours();

    if (currentHours < 12) {
      setGreetings("Good morning");
    } else if (currentHours < 18) {
      setGreetings("Good afternoon");
    } else {
      setGreetings("Good night");
    }
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Welcome, Luiz </Text>
        <Text style={[styles.greetings]}>{greetings}</Text>

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SkillCard text={item.name} />}
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
  greetings: {
    color: "#fff",
  },
});
