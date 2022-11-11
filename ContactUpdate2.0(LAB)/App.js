import React,{ useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList,TouchableOpacity,TextInput,Modal} from 'react-native';
import { Button } from 'react-native-web';

var DATA=[
  {id:1, name:"nouman", contact:"0347687954"},
  {id:2, name:"hammad", contact:"03315861872"},
  {id:3, name:"muzaammil", contact:"0310129867"},
  {id:4, name:"tala", contact:"03156798134"},

]

const App=()=>{
  
  const[data, setdata] =useState(DATA);
  const[isrender,setrender]=useState(false);
  const[ismodvis,setmodvis]=useState(false);
  const[namein,setnamein]=useState();
  const[Contactin,setcontactin]=useState();
  const[edititem,setedititem]=useState();

  const onPressitem=(item)=>{
    setmodvis(true);
    setnamein(item.name)
    setcontactin(item.contact)
    setedititem(item.id)
  }

  const renderitem=({item,index})=>{
    return(
      <TouchableOpacity
      style={styles.item}
      onLongPress={()=> onPressitem(item)}
      >
        <Text style={styles.text}>{item.name}</Text>

      </TouchableOpacity>
    )

  }
  const handleEditItem=(editit)=>{
    const newData=data.map(item=>{
      if(item.id==editit){
        item.name=namein;
        item.contact=Contactin;
        return item;
      }
      return item;
    })
    setdata(newData);
    setrender(!isrender);

  }
  const onPressSavededit=()=>{
    handleEditItem(edititem);
    setmodvis(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item)=>{item.id}}
          renderItem={renderitem}
          extraData={isrender}
          />
      </View>
      <View>
        <Text style={{
          textAlign:'center',
          fontSize:20,
          padding:10,
          fontWeight:'bold'
        }}>Edit Selected Contact</Text>
        <TextInput style={styles.textinput}
          onChangeText={(name1)=>{setnamein(name1)}}
          defaultValue={namein}
          editable={true}
          multiline={false}
          maxLength={200}
          placeholder={"Name"}
          />
           <TextInput style={styles.textinput}
          onChangeText={(name2)=>{setcontactin(name2)}}
          defaultValue={Contactin}
          editable={true}
          multiline={false}
          maxLength={200}
          placeholder={"Phone Number"}
          />
          <TouchableOpacity
          onPress={()=> onPressSavededit()}
          style={styles.touchablesave}
          >
            <Text style={styles.text2}>Save</Text>
          </TouchableOpacity>
        {/* <TextInput style={{
          borderColor:"black",
          borderWidth:2,
          width:"50%",
          margin:4
        }} placeholder={"Name"}>

        </TextInput>
        <TextInput style={{
          borderColor:"black",
          borderWidth:2,
          width:"50%",
          margin:4
        }} placeholder={"Phone Number"}>

        </TextInput>
        <TouchableOpacity text/> */}
      </View>
      {/* <View style={{marginTop:60}}></View>
      
      <Modal
      animationType='fade'
      visible={ismodvis}
      onRequestClose={()=> setmodvis(false)}
      >
        <View style={styles.modelview}>
          <Text style={styles.text1}>Update Data</Text>
          
          
          <TextInput style={styles.textinput}
          onChangeText={(name1)=>{setnamein(name1)}}
          defaultValue={namein}
          editable={true}
          multiline={false}
          maxLength={200}
          />
           <TextInput style={styles.textinput}
          onChangeText={(name2)=>{setcontactin(name2)}}
          defaultValue={Contactin}
          editable={true}
          multiline={false}
          maxLength={200}
          />
          <TouchableOpacity
          onPress={()=> onPressSavededit()}
          style={styles.touchablesave}
          >
            <Text style={styles.text2}>Save</Text>
          </TouchableOpacity>

        </View>
      </Modal> */}
      
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  item:{
    borderBottomWidth:1,
    borgerbottomcolor:'grey',
    alignItems:'flex-start'
    
  },
  text:{
    marginVertical:25,
    fontSize:20,
    fontWeight:'bold',
    marginLeft:30,
  },
  text2:{
    marginVertical:25,
    fontSize:20,
    fontWeight:'bold',
    
  },
  text1:{
    marginBottom:40,
    fontSize:30,
    fontWeight:'bold',
    
  },
  textinput:{
    width:'80%',
    height:70,
    paddingLeft:20,
    borderColor:'grey',
    borderWidth:1,
    fontSize:20
  },
  modelview:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  touchablesave:{
    backgroundColor:'orange',
    borderRadius:40,
    paddingHorizontal:60,
    alignItems:'center',
    textAlign:'center',
    marginTop:30
  }
})