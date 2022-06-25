import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

import styles from './styles/styleApp';
import Form from './src/components/formComponent';
import Task from './src/components/taskComponent';

export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  }
  const handleDeleteTask = (index) => {
    Alert.alert(
      "Notice!!!",
      "You really want delete task???",
      [
        {
          text: "Cancel",
          onPress: () => { }
        },
        {
          text: "OK", onPress: () => {
            let tmpTaskList = [...taskList];
            tmpTaskList.splice(index, 1);
            setTaskList(tmpTaskList);
          }
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo Lists</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  )
}