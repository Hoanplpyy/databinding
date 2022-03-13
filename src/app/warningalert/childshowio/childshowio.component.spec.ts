import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildshowioComponent } from './childshowio.component';

describe('ChildshowioComponent', () => {
  let component: ChildshowioComponent;
  let fixture: ComponentFixture<ChildshowioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildshowioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildshowioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
