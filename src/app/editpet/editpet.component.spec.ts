import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpetComponent } from './editpet.component';

describe('EditpetComponent', () => {
  let component: EditpetComponent;
  let fixture: ComponentFixture<EditpetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditpetComponent]
    });
    fixture = TestBed.createComponent(EditpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
