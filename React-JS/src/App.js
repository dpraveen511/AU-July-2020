import React, { useState, useEffect } from 'react';
import './App.css';
import Addtodo from './Component/Addtodo';
import Header from './Component/Header';
import {getLists,deleteAllLists} from './Component/storage';
import List from './Component/List';
import {ThemeContext,themes} from './Component/ThemeContext';
import ThemedButton from './Component/ThemedButton';

function App(props) {

  function Toolbar(props) {
    return (
      <ThemedButton onClick={props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }
  const[theme,setTheme]=useState(themes.light);
  const toggleTheme=()=>{
    setTheme(theme===themes.light? themes.dark: themes.light);
  }

  function refreshPage() {
    window.location.reload(false);
  }

useEffect(()=>{
    loadLists();
    
  },[]);

const[lists,setLists]=useState([]);
const[clearAll,setClearAll]=useState([]);

const loadLists=()=>{
  setLists(getLists);
 }

const displayLists=()=>{
  
    return lists.map((list,index)=>(<List  value={list} id={index} />));
       
}
const deleteAll=()=>{
  deleteAllLists();
  refreshPage();
}

  return (
    <ThemeContext.Provider value={theme}>
  <div style={{backgroundColor:theme.background}}>
      <Header></Header>
      
     
          <Toolbar changeTheme={toggleTheme} />
     

      <Addtodo></Addtodo>
      { displayLists()}

      <div style={{display:clearAll?"block":"none"}}>             
          <button onClick={deleteAll} style={clear}>Clear all</button>
      </div> 

  </div>
  </ThemeContext.Provider>
  );
}


export default App;

const clear={
  margin:'auto',
  backgroundColor:"#e60000",
  fontSize:'30px',
  width:"60%",
  marginLeft:'13.7%',
  marginRight:'10%',
  borderRadius:'5px'
}