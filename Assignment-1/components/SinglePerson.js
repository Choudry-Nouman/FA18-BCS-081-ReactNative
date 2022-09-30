import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const SinglePerson = ({time,snaps,image,name}) => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={image} style={{backgroundColor:"white",borderRadius:50,margin:10}}/>
        </View>
        <View style={{
            flex:1,
        }}>
            <View>
                <Text>{name}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require("../assets/rightarrow.jpg")} style={{marginRight:5}}></Image>
                <Text style={{fontSize:10,color:"#9c9c9c"}}>Delivered . {time} . </Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:10}}>{snaps}</Text>
                    <Image source={require("../assets/fire.png")}></Image>
                </View>
            </View>
        </View>
        <View>
            <View style={{
                height:50,
                width:50,
                borderRadius:50,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Image source={require("../assets/message.png")} />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:70,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        borderBottomColor:"#d1cbcb",
        borderBottomWidth:1
    }
})

export default SinglePerson