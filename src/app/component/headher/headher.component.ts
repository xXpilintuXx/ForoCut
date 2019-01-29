import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headher',
  templateUrl: './headher.component.html',
  styleUrls: ['./headher.component.css']
})
export class HeadherComponent implements OnInit {
  dep: String[] = ['Medicina', 'Administrativas', 'Ingenierias'];
  constructor() { }
  ngOnInit() {
  }
}
