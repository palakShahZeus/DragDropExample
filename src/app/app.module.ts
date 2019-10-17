import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragComponentComponent } from './dragdrop/drag-component/drag-component.component';
import { DropBoxComponent } from './dragdrop/drop-box/drop-box.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragdropExampleComponent } from './dragdrop/dragdrop-example/dragdrop-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    DragComponentComponent,
    DropBoxComponent,
    DragdropExampleComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
