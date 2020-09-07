import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DEComponent } from './de.component';

describe('DEComponent', () => {
  let component: DEComponent;
  let fixture: ComponentFixture<DEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
