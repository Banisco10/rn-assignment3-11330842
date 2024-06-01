import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Welcome from '../components/homescreen/Welcome'
import SearchBar from '../components/homescreen/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Category from '../components/homescreen/Category'
import Ongoing from '../components/homescreen/Ongoing'


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <ScrollView>
        <Welcome />
        <SearchBar />
        <Category />
        <Ongoing />      
        </ScrollView>
      </View>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  background: {
  backgroundColor: '#F7F0E8',
  width: '100%',
  height: '100%',
  }
})