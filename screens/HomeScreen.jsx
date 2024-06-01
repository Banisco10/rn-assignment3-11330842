import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Welcome from '../components/Welcome'
import SearchBar from '../components/SearchBar'
import { ScrollView } from 'react-native-web'
import { SafeAreaView } from 'react-native-safe-area-context'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
      <View style={styles.background}>
        <Welcome />
        <SearchBar />
      </View>
      </SafeAreaView>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
  backgroundColor: '#FBF9F7',
  height: '100%',
  }
})