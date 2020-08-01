import React, { useState } from 'react';
import {deleteList,editList} from './storage';
const List=(props)=>{

    function refreshPage() {
        window.location.reload(false);
      }

    const deleteP=()=>{
        deleteList(props.id);
        refreshPage();
    }
    const[edit,setEdit]=useState(false); 
    const[editValue,setEditValue]=useState("");

    const EditP=()=>{
        setEdit(!edit);
    }

    const EditSave=()=>{      
        editList(props.id,editValue);
        setEdit();
        refreshPage();
    
    }

return(
    <div>
    <div style={{border:"2px solid #9933ff",width:'60%', marginLeft:'210px', marginRight:'100px',borderRadius:"5px",marginBottom:"5px",padding:'3px',height:'40px'}}>
    <span style={{fontSize:'20px',fontWeight:'bold',color:'#ff4da6'}}>{props.value}</span>
        
        <button style={{float:"right",margin:'2px',fontSize:"20px",padding:'1px',backgroundColor:'#c91d12',borderRadius:'4px',color:"white"}}
        onClick={deleteP}>
            Delete</button>
        
        <button style={{float:"right",margin:'2px',fontSize:"20px",padding:'1px',backgroundColor:'#99ff99',borderRadius:'4px'}}
        onClick={EditP}>
            Edit</button>  
    <span>
    <input type="submit" value="OK"disabled={!edit} onClick={EditSave} style={{float:"right",marginTop:'5px',marginLeft:'1px'}}/>
    <input type="text" disabled={!edit} onChange={(t)=>setEditValue(t.target.value)} style={{float:"right",marginTop:"5px"}} />
    </span>
    
    </div>
    
    </div>
);
}
export default List;
