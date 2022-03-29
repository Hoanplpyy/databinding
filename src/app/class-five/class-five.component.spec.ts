import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFiveComponent } from './class-five.component';

describe('ClassFiveComponent', () => {
  let component: ClassFiveComponent;
  let fixture: ComponentFixture<ClassFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
