import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OngoingCards from '../cards/OngoingCards'

const DATA = [
  { id: '1', job_title: 'Mobile App Development' },
  { id: '2', job_title: 'Web Development' },
  { id: '3', job_title: 'Push Ups' },
  { id: '4', job_title: 'Cook' },
  { id: '5', job_title: 'Exercise'},
  { id: '6', job_title: 'Study' },
  { id: '7', job_title: 'Reading' },
  { id: '8', job_title: 'Learning' },
  { id: '9', job_title: 'Teaching' },
  { id: '10', job_title: 'Dance' },
  { id: '11', job_title: 'Driving' },
  { id: '12', job_title: 'Selling' },
  { id: '13', job_title: 'Guarding' },
  { id: '14', job_title: 'Coding' },
  { id: '15', job_title: 'Advertisement' },
  
];

export default function Ongoing() {
  const [selectedOngoing, setSelectedOngoing] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ongoing Tasks</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {DATA.map((item) => (
          <OngoingCards
            key={item.id}
            item={item}
            selectedOngoing={selectedOngoing}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  contentContainer: {
    paddingVertical: 20,
  },
});
