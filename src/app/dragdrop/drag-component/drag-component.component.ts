import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DragItemList,DropItemList,putDragItemList} from '../../objArray'
import {dropFunction,noReturnFunction} from '../dragdrop.component'

@Component({
  selector: 'app-drag-component',
  templateUrl: './drag-component.component.html',
  styleUrls: ['./drag-component.component.css']
})
export class DragComponentComponent implements OnInit {

  constructor() { }
  list1=DragItemList
  ngOnInit() {
  }
  drop(event:CdkDragDrop<string[]>){
    dropFunction(event)
    putDragItemList(event.previousContainer.data)
    // DropItemList=event.container.data,
    debugger
  }
  noReturn() {
    return noReturnFunction()
  }
}
