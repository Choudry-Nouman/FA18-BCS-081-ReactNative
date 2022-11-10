import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Middle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    innerContainer:{
        flex:1,
        height:0,
        width:0,
        borderTopWidth:80,
        borderTopColor:"#f2da1f",
        borderLeftWidth:100,
        borderLeftColor:"#2bd1ff",
        borderRightWidth:107,
        borderRightColor:"#13f240",
        borderBottomWidth:75,
        borderBottomColor:"#bd1708",
    }

   
    
})

export default Middle