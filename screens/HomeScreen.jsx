import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Welcome from '../components/homescreen/Welcome'
import SearchBar from '../components/homescreen/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Category from '../components/homescreen/Category'


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <Welcome />
        <SearchBar />
        <Category />
      </View>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  background: {
  //backgroundColor: 'yellow',
  width: '100%',
  height: '100%',
  }
})