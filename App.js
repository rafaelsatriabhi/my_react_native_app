import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  TextInput,
  Button,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/goalItem";

export default function App() {
  const [goalInput, setGoalInput] = useState("");

  const [listOfGoal, setListOfGoal] = useState([]);

  const textInputHandler = (textValue) => {
    setGoalInput(textValue);
  };

  const addGoalHandler = () => {
    setListOfGoal((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: goalInput },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setListOfGoal(listOfGoal.filter((goal) => goal.id !== goalId));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputAndButtonContainer}>
        <TextInput
          onChangeText={textInputHandler}
          style={styles.textInput}
          placeholder="Your goal"
          value={goalInput}
        />
        <Button onPress={addGoalHandler} style={styles.button} title="Add" />
      </View>
      <ScrollView alignItems="center" style={styles.listContainer}></ScrollView>
      <FlatList
        data={listOfGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onClickDelete={removeGoalHandler}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
    alignItems: "center",
  },
  inputAndButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "70%",
    padding: 10,
  },
  listContainer: {
    width: "100%",
  },
});
