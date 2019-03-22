import { Component, OnInit } from '@angular/core';
import * as Data from '../../../bd/post.json';
import { TimeAgoPipe } from 'time-ago-pipe';

@Component({
  selector: 'app-textcard',
  templateUrl: './textcard.component.html',
  styleUrls: ['./textcard.component.css']
})
export class TextcardComponent implements OnInit {
  post: any;
  your_date;
  constructor() {
    this.post = Data;
    this.your_date = new Date(this.post.default.date);
    console.log(this.post);
  }

  ngOnInit() {
  }
}
