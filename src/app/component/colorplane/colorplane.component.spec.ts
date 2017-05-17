import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorplaneComponent } from './colorplane.component';

describe('ColorplaneComponent', () => {
  let component: ColorplaneComponent;
  let fixture: ComponentFixture<ColorplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
