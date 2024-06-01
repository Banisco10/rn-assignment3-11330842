import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Welcome = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
        <Text style={styles.welcomeMessage}>Hello , Devs</Text>
        <Text style={styles.tasksMessage}>14 tasks today</Text>
        </View>
        <Image source={require('../icons/Profile Image.png')} style={styles.image}/>
      </View>
    
    </SafeAreaView>
  )
}

export default Welcome
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'space-between',
    padding: 10,
    height: 52,
    width: 354,
    marginTop: 20,  
    marginBottom: 50
  },
  sectionContainer: {
    height: 52,
    width: 170,
  },
  welcomeMessage: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  tasksMessage: {
    fontSize: 12,
    color: 'black',
    textAlign: 'left'
  },
  
    


})