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
        sale: true,
      },
      {
        title:'Improved Forest Management',
        description:'Preservation of large tract of coastal Redwood and Dauglas fir that were slated for harvesting by the timber company.',
        location:'ARCATA SUNNYBRAE TRACT - USA',
        price:'6',
        price_unit:'ton',
        offset:'456,454',
        offset_unit:'lbs',
        sale: false,
      },
      {
        title:'Landfill Methane Gas Capture',
        description:'Landfill methane gas-to-energy facility that provides significant environmental benefits to the surrounding area.',
        location:'WOLF CREEK LANDFILL - USA',
        price:'30',
        price_unit:'ton',
        offset:'2,005,214',
        offset_unit:'lbs',
        sale: false,
      },
      {
        title:'Mixed',
        description:'Greenhouse gas reductions made at a variety of projects, including: reforestation, methane capture, and renewable energy.Greenhouse gas reductions made at a variety of projects, including: reforestation, methane capture, and renewable energy.',
        location:'TERRAPASS MIXED PORTFOLIO - MIXED',
        price:'22.50',
        price_unit:'ton',
        offset:'337,842',
        offset_unit:'lbs',
        sale: false,
      },
      {
        title:'Reforestation & Hyrdopower',
        description:'Supporting biodiversity and reforestration in Victoria, Australia; along with carbon reduction from a hyrdopower plant in Vietnam.',
        location:'GASTON COUNTY LANDFILL - USA',
        price:'2.50',
        price_unit:'ton',
        offset:'957,842',
        offset_unit:'lbs',
        sale:true,
      },
      {
        title:'Reduced Emissions from deforestation',
        description:'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
        location:'KARIBA REDD+- ZIMBABWE',
        price:'3.50',
        price_unit:'ton',
        offset:'957,842',
        offset_unit:'lbs',
        sale:true,
      }
    ]
  }

}
