import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View>
          <FontAwesome5 name={'address-card'} solid size={20} color="green" />
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View>
        <FontAwesome5 name={'trash-alt'} solid size={20} color="red" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    maxWidth: '85%',
    marginLeft: 7
  }
});

export default Task;