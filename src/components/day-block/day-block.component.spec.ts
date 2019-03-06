import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBlockComponent } from './day-block.component';

describe('DayBlockComponent', () => {
  let component: DayBlockComponent;
  let fixture: ComponentFixture<DayBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
