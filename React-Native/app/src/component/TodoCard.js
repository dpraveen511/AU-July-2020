import React, { useState, useEffect } from "react";
import {Text,View, ImageBackground,TouchableOpacity,StyleSheet,Button,Alert,AsyncStorage} from "react-native";
const TodoCard =(props)=>{
    
    const[ListArray,setListArray]= useState([]);
    
    const deleteList = async()=>{
        Alert.alert("You added a new list","Have a nice day",[
          
            { text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        const Lists= JSON.parse(AsyncStorage.getItem("todoLists"));
        const index=props.key;
        Lists.splice(index,1);
        await AsyncStorage.setItem("todoLists",JSON.stringify(Lists));
    }

    return(
        <View style={Styles.container}>
            <Button title="X" onPress={deleteList}/>
            <Text style={Styles.title}>{props.data}</Text>
        </View>
    )
}
const Styles =StyleSheet.create({
    title:{
        fontSize:14,
        color:"white",
        fontWeight: "700",
        padding:3
    },
    source:{
        fontSize:16,
        color:"white",
        fontWeight: "700",
        padding:5,
        alignSelf:"flex-end"
    },
    background:{
        width:"100%",
        height: "100%",
        justifyContent:"space-between"
    },
    container:{
        width:"95%",
        height :130,
        marginLeft:"2.5%",
        marginRight:"2.5%",
        
        marginTop:5,
        padding:5,
        backgroundColor: "black"
    }
})
export default TodoCard;