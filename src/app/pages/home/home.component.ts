import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any=[];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        title:'Reduced Emissions from deforestation',
        description:'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
        location:'KARIBA REDD+- ZIMBABWE',
        price:'7.50',
        price_unit:'ton',
        offset:'957,842',
        offset_unit:'lbs',
      }
    ]
  }

}
