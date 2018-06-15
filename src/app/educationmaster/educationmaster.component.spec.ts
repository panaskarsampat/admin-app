import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationmasterComponent } from './educationmaster.component';

describe('EducationmasterComponent', () => {
  let component: EducationmasterComponent;
  let fixture: ComponentFixture<EducationmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
