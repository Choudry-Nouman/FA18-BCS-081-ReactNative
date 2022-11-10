//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Board = ({back_color}) => {
    return (
        <View style={[styles.container,{backgroundColor:back_color}]}>
            <View style={styles.tiltedSquare}>
                <View style={styles.rowNo1}>
                    <View style={[styles.circle,{backgroundColor:back_color}]}>
                        
                    </View>
                    <View style={[styles.circle,{backgroundColor:back_color}]}>

                    </View>
                    
                </View>
                <View style={styles.rowNo2}>
                    <View style={[styles.circle,{backgroundColor:back_color}]}>

                    </View>
                    <View style={[styles.circle,{backgroundColor:back_color}]}>

                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tiltedSquare:{
        borderRadius:20,
        backgroundColor:"white",
        width:200,
        height:200,
        transform: [{ rotate: '45deg' }],
        
    },
    rowNo1:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    rowNo2:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20

    },
    circle:{
        height:50,
        width:50,
        borderRadius:50
    }

})
    
    

//make this component available to the app
export default Board;
