import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function OngoingCards({ item, selectedOngoing }) {
  return (
    <TouchableOpacity style={styles.container(selectedOngoing, item)}>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedOngoing, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.companyName} numberOfLines={1}>{item.task}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (selectedOngoing, item) => ({
    backgroundColor: selectedOngoing === item.category ? '#FBF9F7' : '#FBF9F7',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    width: 340,
    height: 128,
    alignItems: 'left',
    justifyContent: 'center'
  }),
  infoContainer: {
    marginBottom: 10,
  },
  jobName: (selectedOngoing, item) => ({
    fontSize: 25,
    fontWeight: selectedOngoing === item.ongoing ? 'bold' : 'normal',
  }),
  companyName: {
    fontSize: 14,
    color: 'gray',
  },
});

