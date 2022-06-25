import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';

function Task(props) {
  const {number} = props;
  const numberTest = number < 10 ? `0${number}` : number;
  const itemBg = number % 2 === 0 ? styles.event : styles.odd
  return (
    <TouchableOpacity onLongPress={props.onDeleteTask}>
        <View style = {styles.item}>
            <View style = {[styles.square, itemBg]}>
                <Text style = {styles.number}>{numberTest}</Text>
            </View>
            <Text style = {styles.content}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Task