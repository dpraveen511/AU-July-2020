import { Component, OnInit } from '@angular/core';
import{PopService} from '../pop.service';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {

  constructor(public popservice1:PopService) { }
delete(){
  this.popservice1.showDeleteUser=false;
  this.popservice1.ShowDialog=false;
  this.popservice1.deleteStorage(); 
 
  
}
  ngOnInit(): void {
  }

}
