import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'


export default function SearchBar() {
  return (
    <View>
        <View style={styles.searchContainer}>
        <Icon name="search" style={styles.icon} />
        <TextInput style={styles.search}  placeholder="Search" />
         <Image source={require('../icons/Filter.png')} style={styles.image}/>
        </View> 
      </View>
  )
}

const styles = StyleSheet.create({

searchContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 49,
    width: 353,
    marginTop:20,
    marginBottom: 70,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent:'center'
  
    

},
search:{
    width: 275,
    height: 49,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 25,
    fontSize: 16,
    marginLeft: -18
    
},
image: {
    borderRadius: 5,
    marginLeft: 20,
},
icon: {
  fontSize: 15,
  marginLeft: 13,
  zIndex: 100
}
})