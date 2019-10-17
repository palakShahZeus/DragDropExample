import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import {dropFunction} from '../dragdrop.component'

@Component({
  selector: 'app-dragdrop-example',
  templateUrl: './dragdrop-example.component.html',
  styleUrls: ['./dragdrop-example.component.css']
})
export class DragdropExampleComponent implements OnInit {
  ngOnInit() {
  }
    todo = [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ];
  
    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
  
    drop(event: CdkDragDrop<string[]>) {
      dropFunction(event)
    }
  }

