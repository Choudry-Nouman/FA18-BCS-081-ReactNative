import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Board';
import Middle from './Middle';
import Stairs from './Stairs';
import StairsHorizontal from './StairsHorizontal';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.innerMostContainer}>
          <View style={styles.rowNo1}>
            <View style={styles.rightItemRow1}>
              <Board back_color={"#2bd1ff"}/>
            </View>
            <View style={styles.middleItemRow1}>
              <Stairs back_color={"#f2da1f"} rotate_angle={"180deg"} />
            </View>
            <View style={styles.leftItemRow1}>
              <Board back_color={"#f2da1f"}/>
            </View>
          </View>
          <View style={styles.rowNo2}>
            <View style={styles.rightItemRow1}>
              <StairsHorizontal back_color={"#2bd1ff"} rotate_angle={"180deg"} />
            </View>
            <View style={{flex:1}}>
                <Middle />
            </View>
            <View style={styles.leftItemRow1}>
              <StairsHorizontal back_color={"#13f240"} rotate_angle={"180deg"} rotate_angle_main={"180deg"}/>
            </View>
          </View>
          <View style={styles.rowNo3}>
            <View style={styles.rightItemRow1}>
              <Board back_color={"#bd1708"}/>
            </View>
            <View style={styles.middleItemRow1}>
              <Stairs back_color={"#bd1708"} rotate_angle={"180deg"} rotate_angle_main={"180deg"}/>
            </View>
            <View style={styles.leftItemRow1}>
              <Board back_color={"#13f240"}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer:{
    width:"55%",
    height:"80%",
    backgroundColor:"white",
    borderColor:"grey",
    borderWidth:12
  },
  innerMostContainer:{
    flex:1,
    borderColor:"white",
    borderWidth:3
  },
  rowNo1:{
    flex:2,
    flexDirection:"row"
  },
  rowNo2:{
    flex:1,
    flexDirection:"row"

  },
  rowNo3:{
    flex:2,
    flexDirection:"row"

  },
  middleItemRow1:{
    flex:1,
  },
  rightItemRow1:{
    flex:2
  },
  leftItemRow1:{
    flex:2
  }

  

});
