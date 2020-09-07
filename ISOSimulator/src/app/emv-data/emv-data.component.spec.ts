import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmvDataComponent } from './emv-data.component';

describe('EmvDataComponent', () => {
  let component: EmvDataComponent;
  let fixture: ComponentFixture<EmvDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmvDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmvDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
