import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder ,Validators, FormGroup} from '@angular/forms';
import {PopService} from '../pop.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit, OnDestroy {

  constructor(private form:FormBuilder, public popservice:PopService) { }

  addform=this.form.group({
    empId:['',[Validators.required,Validators.pattern(/[1234567890]+/)]],
    firstName:['',Validators.required],
    lasttName:[''],
    age:[''],
    city:['']
  })
  onSubmit(){
    this.popservice.ShowDialog=false;
    this.popservice.showAddUser=false;
    this.popservice.users.push(this.addform.value);
    console.log(this.addform.value);
    console.log(this.popservice.users[this.popservice.users.length-1]);
    this.popservice.setStorage();
  }

  ngOnInit(): void {

}
ngOnDestroy(){
  console.log(this.popservice.showAddUser);
}
  }


