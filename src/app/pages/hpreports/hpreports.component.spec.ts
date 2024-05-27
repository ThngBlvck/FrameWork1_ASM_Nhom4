import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPreportsComponent } from './hpreports.component';

describe('HPreportsComponent', () => {
  let component: HPreportsComponent;
  let fixture: ComponentFixture<HPreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HPreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
