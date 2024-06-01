import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function CategoryCards({ item, selectedCategory }) {
  return (
    <TouchableOpacity style={styles.container(selectedCategory, item)}>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedCategory, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.companyName} numberOfLines={1}>{item.task}</Text>
      </View>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: (selectedCategory, item) => ({
    backgroundColor: selectedCategory === item.category ? '#FBF9F7' : '#FBF9F7',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    width: 186,
    height: 192,
  }),
  infoContainer: {
    marginBottom: 10,
  },
  jobName: (selectedCategory, item) => ({
    fontSize: 16,
    fontWeight: selectedCategory === item.category ? 'bold' : 'normal',
  }),
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 151,
    height: 132,
  }
})
