import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FouthCompComponent } from './fouth-comp.component';

describe('FouthCompComponent', () => {
  let component: FouthCompComponent;
  let fixture: ComponentFixture<FouthCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FouthCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FouthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
