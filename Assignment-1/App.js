import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View, ScrollView, Image } from 'react-native';
import SinglePerson from './components/SinglePerson';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.left}>
          <View style={styles.avatarCon}>
            <Image source={require("./assets/avatar2.webp")} width={50} height={50}></Image>
          </View>
          <View style={styles.navLogos}>
            <Image source={require("./assets/search.png")} width={20} height={20}></Image>
          </View>

        </View>
        <View style={styles.middle}>
          <Text style={{
            fontSize:20,
            fontWeight:'bold'
          }}>Chat</Text>
        </View>
        <View style={styles.right}>
          <View style={styles.navLogos}>
            <Image source={require("./assets/add-friend.png")} width={20} height={20}></Image>
          </View>
          <View style={styles.navLogos}>
            <Image source={require("./assets/edit-message.png")} width={20} height={20}></Image>
          </View>
        </View>

      </View>
      <ScrollView style={styles.body}>
          <SinglePerson time="8m" snaps="300" image={require("./assets/avatar-4.jpg")} name="Ali Talal"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar3.jpg")} name="Hammad"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-2.jpg")} name="Ahmed"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-3.jpg")} name="Bestie"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-5.jpg")} name="BadBoy"/>
          <SinglePerson time="8m" snaps="300" image={require("./assets/avatar-4.jpg")} name="Ali Talal"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar3.jpg")} name="Hammad"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-2.jpg")} name="Ahmed"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-3.jpg")} name="Bestie"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-5.jpg")} name="BadBoy"/>
          <SinglePerson time="8m" snaps="300" image={require("./assets/avatar-4.jpg")} name="Ali Talal"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar3.jpg")} name="Hammad"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-2.jpg")} name="Ahmed"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-3.jpg")} name="Bestie"/>
          <SinglePerson time="8m" snaps="78" image={require("./assets/avatar-5.jpg")} name="BadBoy"/>

          
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar:{
    flex:.1,
    flexDirection:"row",
  },
  body:{
    flex:1,
    // backgroundColor:"black"
  },
  left:{
    flex:1,
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center'
  },
  middle:{
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  right:{
    flex:1,
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center'
  },
  avatarCon:{
    backgroundColor:"#d1cbcb",
    borderRadius:50,
    width:40,
    height:40,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  navLogos:{
    backgroundColor:"#d1cbcb",
    borderRadius:50,
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center',
  }
});
