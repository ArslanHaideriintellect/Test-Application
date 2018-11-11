import { Component, OnInit , Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
})
export class HomeSliderComponent implements OnInit {
   test:string='MORE';
  @Input() data: any;
  // items :Array<any>=[];
// private items :any = [
//
//   {
//     image:'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=car-vehicle-luxury-112460.jpg&fm=jpg'
//   },
//
//
//   {
//     image:'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=car-vehicle-luxury-112460.jpg&fm=jpg'
//   },
//
//   {
//     image:'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=car-vehicle-luxury-112460.jpg&fm=jpg'
//   },
//
//   {
//     image:'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=car-vehicle-luxury-112460.jpg&fm=jpg'
//   },
//
//
//
// ]
  constructor() {

  //   this.items=[
  //
  // {
  //   image:'https://cdn.bmwblog.com/wp-content/uploads/bmw-waxing-polish-07-750x500.jpg'
  // },
  //
  //
  // {
  //   image:'https://cdn.bmwblog.com/wp-content/uploads/bmw-waxing-polish-07-750x500.jpg'
  // },
  //
  // {
  //   image:'https://cdn.bmwblog.com/wp-content/uploads/bmw-waxing-polish-07-750x500.jpg'
  // },
  //
  // {
  //   image:'https://cdn.bmwblog.com/wp-content/uploads/bmw-waxing-polish-07-750x500.jpg'
  // },
  //
  //   ];
  }

  ngOnInit() {
  }

}
