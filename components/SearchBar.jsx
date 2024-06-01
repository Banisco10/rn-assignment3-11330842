import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'

export class SearchBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <Icon name="search" style={styles.icon} />
        <TextInput style={styles.search} placeholder="Search" />
         </View>
         <Image source={require('../icons/Filter.png')} style={styles.image}/>
        </View> 
      </View>
    )
  }
}

export default SearchBar

const styles = StyleSheet.create({

searchContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 49,
    width: 353,
    marginTop:20,
    paddingTop: 10,
    paddingLeft:10,
    alignItems: 'left',
    justifyContent:'space-between',
    

},
search:{
    width: 270,
    height: 49,
    backgroundColor: 'white',
    borderRadius: 15,
    padding:10,
    fontSize: 16,
    
},
image: {
    borderRadius: 5
},
icon: {
  fontSize: 15,
  marginRight: 10
}
})