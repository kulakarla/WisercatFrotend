import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HAHComponent } from './hah.component';

describe('HAHComponent', () => {
  let component: HAHComponent;
  let fixture: ComponentFixture<HAHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HAHComponent]
    });
    fixture = TestBed.createComponent(HAHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
