import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalSettingComponent } from './terminal-setting.component';

describe('TerminalSettingComponent', () => {
  let component: TerminalSettingComponent;
  let fixture: ComponentFixture<TerminalSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
