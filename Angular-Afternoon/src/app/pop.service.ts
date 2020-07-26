import { Injectable ,OnInit} from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class PopService {
  showAddUser :boolean=false;
  showEditUser:boolean=false;
  showDeleteUser:boolean=false;
  ShowDialog=false;
  id:string;
   users=[];
  start=true;

  constructor() { }
   setUsers(){
     this.users=JSON.parse(sessionStorage.getItem('records'));
   }
   setStorage(){
     sessionStorage.setItem('records',JSON.stringify(this.users));
   }
   deleteStorage(){
     for(let i=0;i<this.users.length;i++){
       if(this.users[i].empId===this.id){
         this.users.splice(i,1);
       }
     }
     sessionStorage.setItem('records',JSON.stringify(this.users))
     this.setUsers();
   }
}
