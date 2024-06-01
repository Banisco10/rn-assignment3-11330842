import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CategoryCards from '../cards/CategoryCards';

const DATA = [
  {
    job_title: 'Exercise',
    task: '12 Tasks',
    image: require('../icons/young woman working online.png'),
  },
  {
    job_title: 'Study',
    task: '12 Tasks',
    image: require('../icons/young woman working at desk.png'),
  },
  {
    job_title: 'Code',
    task: '12 Tasks',
    image: require('../icons/coding.jpg'),
  },
  {
    job_title: 'Cook',
    task: '12 Tasks',
    image: require('../icons/cook.jpg'),
  },
  {
    job_title: 'Design',
    task: '12 Tasks',
    image: require('../icons/graphic design.png'),
  },
  {
    job_title: 'Music',
    task: '12 Tasks',
    image: require('../icons/music.jpg'),
  },
  {
    job_title: 'Gaming',
    task: '12 Tasks',
    image: require('../icons/gaming.jpg'),
  },
  {
    job_title: 'Family',
    task: '12 Tasks',
    image: require('../icons/family.jpg'),
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Category() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
      </View>

      <View style={styles.categoryContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <CategoryCards item={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal
        />
      </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  categoryContainer: {
    width: 396,
    height: 202,
  },
  contentContainerStyle: {
    paddingHorizontal: 50,
    columnGap: 24,
    paddingLeft: 10
  },
});
