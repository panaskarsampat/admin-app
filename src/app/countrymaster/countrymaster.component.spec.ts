import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrymasterComponent } from './countrymaster.component';

describe('CountrymasterComponent', () => {
  let component: CountrymasterComponent;
  let fixture: ComponentFixture<CountrymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
