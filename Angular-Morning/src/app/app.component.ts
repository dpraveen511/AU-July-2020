import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  arr=[
    { 
      title:"a",
      id:"1",
    },
    {
      title:"b",
      id:"2",
    },
    {
      title:"c",
      id:"3",
    }
  ]


  log(str:string):void{
    console.log('clicked'+str);
  };
}
