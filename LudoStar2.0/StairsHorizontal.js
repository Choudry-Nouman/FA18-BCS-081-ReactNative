import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StairsHorizontal = ({back_color,rotate_angle_main}) => {
  return (
    <View style={[styles.container,{transform:[{rotate: rotate_angle_main}]}]}>
      <View style={styles.row}>
        <View style={styles.col}>

        </View>
        <View style={[styles.col,{backgroundColor:back_color}]}>


        </View>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
            <View style={[styles.triangle,{borderBottomColor:back_color,transform:[{rotate: "90deg"}]}]}>
            </View>
        </View>
        <View style={[styles.col,{backgroundColor:back_color}]}>

        </View>
        <View style={[styles.col,{backgroundColor:back_color}]}>

        </View>
        <View style={[styles.col,{backgroundColor:back_color}]}>

        </View>
        <View style={[styles.col,{backgroundColor:back_color}]}>

        </View>
        <View style={[styles.col,{backgroundColor:back_color}]}>

        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
        <View style={styles.col}>

        </View>
      </View>
    </View>
  )
}

export default StairsHorizontal

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flex:1,
        flexDirection:'row',

    },
    col:{
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