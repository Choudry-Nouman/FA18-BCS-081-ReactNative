import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stairs = ({back_color,rotate_angle_main,rotate_angle}) => {
  return (
    <View style={[styles.container,{transform:[{rotate: rotate_angle_main}]}]}>
      <View style={styles.row}>
        <View style={styles.column}>

        </View>
        <View style={styles.column}>
            <View style={[styles.triangle,{borderBottomColor:back_color,transform:[{rotate: rotate_angle}]}]}>
            </View>
        </View>
        <View style={styles.column}>

        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>

        </View>
        <View style={[styles.column,{backgroundColor:back_color}]}>

        </View>
        <View style={[styles.column,{backgroundColor:back_color}]}>

        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>

        </View>
        <View style={[styles.column,{backgroundColor:back_color}]}>

        </View>
        <View style={styles.column}>

        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>

        </View>
        <View style={[styles.column,{backgroundColor:back_color}]}>

        </View>
        <View style={styles.column}>

        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>

        </View>
        <View style={[styles.column,{backgroundColor:back_color}]}>

        </View>
        <View style={styles.column}>

        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>

        </View>
        <View style={[styles.column,{backgroundColor:back_color}]}>

        </View>
        <View style={styles.column}>

        </View>
      </View>
      
    </View>
  )
}

export default Stairs

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flex:1,
        flexDirection:'row'
    },
    column:{
        flex:1,
        borderColor:"black",
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    triangle:{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 18,
        borderRightWidth: 18,
        borderBottomWidth: 25,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        justifyContent:'flex-start',
        alignItems:'center',
    },


})