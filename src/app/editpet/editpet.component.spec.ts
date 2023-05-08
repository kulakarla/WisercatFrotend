import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetComponent } from './editpet.component';

describe('EditPetComponent', () => {
  let component: EditPetComponent;
  let fixture: ComponentFixture<EditPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPetComponent]
    });
    fixture = TestBed.createComponent(EditPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
