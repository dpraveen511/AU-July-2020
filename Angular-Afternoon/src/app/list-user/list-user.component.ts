import { Component, OnInit ,OnChanges} from '@angular/core';
import{PopupService} from '../popup.service';
import{PopService} from '../pop.service';
import { ArrayType, CompileMetadataResolver } from '@angular/compiler';
import { UrlSerializer } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit ,OnChanges {
  constructor(public popservice:PopService){}

  
  showDialog=false;
  DeleteUser=false;
  EditUser=false;
  AddUser=false;
  //users=[];

onedit(user :string){
  this.popservice.id=user;
  
  this.popservice.ShowDialog=true;
  this.popservice.showEditUser=true;
  //this.EditUser=true;
  
}
onclose(){
  
  this.popservice.ShowDialog=false;
  if(this.popservice.showDeleteUser)
  this.popservice.showDeleteUser=false;
  if(this.popservice.showEditUser)
  this.popservice.showEditUser=false;
  if(this.popservice.showAddUser)
  this.popservice.showAddUser=false;
}
onDelete(user:string){
  
  this.popservice.id=user;
  this.popservice.ShowDialog=true;
  //this.DeleteUser=true;
  this.popservice.showDeleteUser=true;
  console.log(this.popservice.id);
  console.log(user);
}
onAdd(){
  this.popservice.ShowDialog=true;
  //this.AddUser=true;
  this.popservice.showAddUser=true;
}

ngOnInit(): void {
 
  sessionStorage.setItem('records',JSON.stringify([{
		firstName:'praveen',
		lasttName:'kumar',
		age:'21',
		empId:'1',
		city:'Guntur'
		},
		{
		firstName:'vasu',
		lasttName:'teja',
		age:'20',
		empId:'2',
		city:'Kurnool'
    }]))
    this.popservice.users=JSON.parse(sessionStorage.getItem('records'));
    
   }
  //  delete(){
  
  //   let obj= JSON.parse(sessionStorage.getItem('records'));
  //   for(let i=0;i<obj.length;i++){
  //          if(obj[i].empId===this.popservice.id){
  //            obj.splice(i,1);
  //         }
  //      }
  //      console.log(obj);
  //    sessionStorage.setItem('records',JSON.stringify(obj))
  //  this.users=JSON.parse(sessionStorage.getItem('records'));
  //  console.log(this.users);
  //  this.showDialog=false;
  // }
ngOnChanges(){
 this.popservice.setUsers();
  
}
} 
 