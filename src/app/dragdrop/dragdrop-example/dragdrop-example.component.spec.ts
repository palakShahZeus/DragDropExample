import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropExampleComponent } from './dragdrop-example.component';

describe('DragdropExampleComponent', () => {
  let component: DragdropExampleComponent;
  let fixture: ComponentFixture<DragdropExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
