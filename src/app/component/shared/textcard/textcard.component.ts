import { Component, OnInit } from '@angular/core';
import * as Data from '../../../bd/post.json';


@Component({
  selector: 'app-textcard',
  templateUrl: './textcard.component.html',
  styleUrls: ['./textcard.component.css']
})
export class TextcardComponent implements OnInit {
  post: any;
  constructor() {
    this.post = Data;
    console.log(this.post);
  }

  ngOnInit() {
  }
}
