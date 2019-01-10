import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubestackComponent } from './cubestack.component';

describe('CubestackComponent', () => {
  let component: CubestackComponent;
  let fixture: ComponentFixture<CubestackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubestackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubestackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
