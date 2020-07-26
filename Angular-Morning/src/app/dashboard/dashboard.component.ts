import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  @Input() title:any;
  @Input() id:number;
  

  ngOnInit(): void {
  }

}
