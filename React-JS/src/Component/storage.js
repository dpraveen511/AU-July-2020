export const getLists =  ()=>
{
      let data =  sessionStorage.getItem("lists");
      if(data == null)
       {
                 data = [];
                 return data;
       }
            return JSON.parse(data);
}

export const addList = (item) =>{
      let data = getLists();
      data.push(item);
      sessionStorage.setItem("lists",JSON.stringify(data));
}

export const editList = (index,item) =>{           
      let data = getLists();
      data[index] = item;
      sessionStorage.setItem("lists",JSON.stringify(data));
}

export const deleteList = (index) =>{         
      let data = getLists();
      data.splice(index,1);
      data = JSON.stringify(data);
      sessionStorage.setItem("lists",data);
}
export const deleteAllLists= ()=>{
      sessionStorage.removeItem("lists");
}