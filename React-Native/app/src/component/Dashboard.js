import React from 'react';
import { Text,TextInput, RefreshControl,View, SafeAreaView, Platform ,StyleSheet, ScrollView,ActivityIndicator,FlatList,Button, AsyncStorage,Alert} from 'react-native';
import TodoCard from "./TodoCard";
import { useEffect, useState } from 'react';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Dashboard() {
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  const[list,addList]=useState("");
  const[todolist,setList]=useState([]);
  
  
  useEffect(()=>{
   
  },[])
  

  const logout =async()=>{
    await AsyncStorage.removeItem("todoLists");
    await AsyncStorage.removeItem("username")
  }

  const renderArticles=()=>{
     const Lists= AsyncStorage.getItem("todoLists"));
     return Lists.map((lists,index)=><TodoCard data={lists} key={index}/>);
     //return todolist.map((lists,index)=><NewsCard data={lists} key={index}/>);
  
    
      //return <ActivityIndicator size="large"/> ;  
  }
  
  const save= async()=>{
    todolist.push(list);
    const Lists=JSON.parse(AsyncStorage.getItem("todoLists"));
    Lists.push(list);
    await AsyncStorage.setItem("todoLists",JSON.stringify(Lists));
    Alert.alert("You added a new list",""[

      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false })
    todolist.pop();
    //setList(JSON.parse(AsyncStorage.getItem("todoLists")));
  //todolist.push(list);
    
    
  }
 
  return (
    <View style={Styles.mainContainer}>
      <Button title="Logout" onPress={logout} style={Styles.logout}/>
      <TextInput style={Styles.textInputStyle}  onChangeText={(text) => addList(text)} placeholder="Enter to add a new list" />
      <Button title="Save" style={{width:"60%"}} onPress={save}/>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {renderArticles()}
      </ScrollView>
     </View>
  );
}

const Styles =StyleSheet.create({
  mainContainer:{
    marginTop: Platform.OS==="android"? 15:0,
    backgroundColor:"white",
    flex:1
  },
  textInputStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    padding: 2,
    marginLeft:"5%",
    marginRight:"5%",
    width: "90%",
    marginBottom: 16,
    marginTop:9
},
logout:{
  backgroundColor:"red",
  marginBottom:5
}
 
})