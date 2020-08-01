import React, {  useState } from 'react';
import {addList} from './storage';
const Addtodo= (props)=> {
   const[value,setValue]=useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        addList(value);
        setValue( "" );
        refreshPage();
    };

    function refreshPage() {
        window.location.reload(false);
      }

    const onChange = (e) => setValue( e.target.value );

        return (
            <form onSubmit={onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" name="title" style={listInput} placeholder="Add Todo..." value={value} onChange={onChange} required/>
                <input type="submit" value="Save" style= {submit}/>
            </form>
        )
    
}

const listInput={
    flex: '7', padding: '5px',margin:"10px",border:"2px solid black",borderRadius:'5px',height:"40px", fontSize:"17px"
}
const submit={
    flex: '1',margin:"10px",borderRadius:'5px',color:'white',fontSize:'25px',backgroundColor:"#4da6ff",fontWeight:"400"
}

export default Addtodo;