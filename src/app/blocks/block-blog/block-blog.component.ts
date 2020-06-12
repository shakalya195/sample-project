import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-blog',
  templateUrl: './block-blog.component.html',
  styleUrls: ['./block-blog.component.css']
})
export class BlockBlogComponent implements OnInit {

  @Input() post:any;
  constructor() { }

  ngOnInit() {
  }

}
