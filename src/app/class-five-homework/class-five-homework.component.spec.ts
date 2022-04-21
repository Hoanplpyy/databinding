import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFiveHomeworkComponent } from './class-five-homework.component';

describe('ClassFiveHomeworkComponent', () => {
  let component: ClassFiveHomeworkComponent;
  let fixture: ComponentFixture<ClassFiveHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassFiveHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFiveHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
