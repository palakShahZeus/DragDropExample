import { Component, OnInit } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {DropItemList} from '../../objArray'

import {dropFunction} from '../dragdrop.component'

@Component({
  selector: 'app-drop-box',
  templateUrl: './drop-box.component.html',
  styleUrls: ['./drop-box.component.css']
})
export class DropBoxComponent implements OnInit {
  list2=DropItemList;
  ngOnInit() {
  }
  constructor() { }

drop(event:CdkDragDrop<string[]>){
  dropFunction(event)
}
  
}
