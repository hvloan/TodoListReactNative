import { View, Keyboard, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

import styles from '../formComponent/style';

const Form = (props) => {

  const [task, setTask] = useState('');
  const handleAddTask = () => {
    if (task.length === 0) {
      alert('Please input your task before press button');
      return false;
    }
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}
      style={styles.addTask}>

      <TextInput
        value={task}
        placeholder='Input your task'
        style={styles.inputText}
        onChangeText={(text) => setTask(text)} />

      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

export default Form 