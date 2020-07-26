import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators, FormGroup} from '@angular/forms';
import {PopService} from '../pop.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  constructor(private form:FormBuilder, public popservice:PopService) { }
  index :number;
  editform=this.form.group({
    empId:['',[Validators.required,Validators.pattern(/[1234567890]+/)]],
    firstName:['',Validators.required],
    lasttName:[''],
    age:[''],
    city:['']
  })
  onSubmit(){
    this.popservice.ShowDialog=false;
    this.popservice.showEditUser=false;
    this.popservice.users[this.index]=this.editform.value;
    console.log(this.editform.value);
    console.log(this.popservice.users[this.index]);
    this.popservice.setStorage();
  }

  ngOnInit(): void {
for(let i=0;i<this.popservice.users.length;i++){
  if(this.popservice.users[i].empId==this.popservice.id)
  this.index=i;
  console.log(this.index);
}
  }

}
