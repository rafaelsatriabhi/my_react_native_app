import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
    <TouchableOpacity onPress={() => props.onClickDelete(props.id)} style={styles.goalItem}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
    width: 320,
    marginVertical: 10,
    padding: 10,
  },
})

export default GoalItem
