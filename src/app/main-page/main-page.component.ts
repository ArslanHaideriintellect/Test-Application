import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {DataService} from '../data.service';
import {HomeSliderComponent} from './home-slider/home-slider.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
Data: any = [];
  private items :Array<any>=[];
  @ViewChild(HomeSliderComponent)TestNames;
  constructor( private data:DataService) {

    this.items=[

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0003_1966.jpg'
      },



      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0001_1970.jpg'
      },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0004_1988.jpg'
      },
      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0003_1966.jpg'
      },


      // {
      //   image:'https://www.cars.com/cstatic-images/car-pictures/xl/USC70LRS021B021001.jpg'
      // },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0001_1970.jpg'
      },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0004_1988.jpg'
      },
      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0003_1966.jpg'
      },


      // {
      //   image:'https://www.cars.com/cstatic-images/car-pictures/xl/USC70LRS021B021001.jpg'
      // },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0001_1970.jpg'
      },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0004_1988.jpg'
      },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0003_1966.jpg'
      },



      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0001_1970.jpg'
      },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0004_1988.jpg'
      },
      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0003_1966.jpg'
      },


      // {
      //   image:'https://www.cars.com/cstatic-images/car-pictures/xl/USC70LRS021B021001.jpg'
      // },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0001_1970.jpg'
      },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0004_1988.jpg'
      },
      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0003_1966.jpg'
      },


      // {
      //   image:'https://www.cars.com/cstatic-images/car-pictures/xl/USC70LRS021B021001.jpg'
      // },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0001_1970.jpg'
      },

      {
        image:'https://www.toyota.com/content/tcom1/custom-panels/heritage/560x288/_0004_1988.jpg'
      },

      ];
  }
test:string='first-test'


   ngOnInit() {
    this.data.currentData.subscribe( Data => this.Data = Data);
this.test = this.TestNames.test;
  }

}
