import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';



@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  Data: any = [];
  //  Data: Array<string> = [];
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.currentData.subscribe( Data => this.Data = Data);
// this.newData();
  }

  // newData() {
  //   this.data.changeData('new data');
  // }
}
