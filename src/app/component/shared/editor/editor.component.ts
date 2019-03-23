import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { template } from '@angular/core/src/render3';



@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public Editor = ClassicEditor;
  public Config = { toolbar: [ 'bold', 'italic', 'Blockquote', '|', 'link',  '|', 'undo', 'redo' ] };
  constructor() {
   }

  ngOnInit() {
  }


}
