import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../service/pets.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OptionService } from '../service/option-service.component';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../models/Pet';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditPetComponent implements OnInit {


  title = 'EditPet';

  @Input() petInput: Pet;

  editPetForm: FormGroup;

  colorList: any;

  animalList: any;

  countryList: any;

  errorMessage: string;

  editPetFailed: any;

  formSubmitted: boolean;

  constructor(private petService: PetService, private optionService: OptionService, private router: Router) {

  }


  ngOnInit() {

    console.log("JOU")
    this.editPetForm = new FormGroup({
      idCode: new FormControl(this.petInput.idCode, Validators.required),
      name: new FormControl(this.petInput.name, Validators.required),
      color: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });


    combineLatest([
      this.optionService.getColors(),
      this.optionService.getCountries(),
      this.optionService.getAnimals()
    ]).subscribe(([colors, countries, animals]) => {
      this.colorList = colors;
      this.countryList = countries;
      this.animalList = animals;

      const selectedColor = this.colorList.find(color => color.name === this.petInput.color);
      const selectedCountry = this.countryList.find(country => country.name === this.petInput.country);
      const selectedAnimal = this.animalList.find(animal => animal.name === this.petInput.animal);

      this.editPetForm.controls['color'].setValue(selectedColor);
      this.editPetForm.controls['country'].setValue(selectedCountry);
      this.editPetForm.controls['animal'].setValue(selectedAnimal);
    })
  }

  /**
  onSubmit() {
    this.formSubmitted = true;
    if (this.addPostForm.valid) {
      console.log(this.addPostForm.value);
      this.petService.addPet(this.addPostForm.value).subscribe(
        response => {
          console.log(response);
          this.addPostFailed = false;
          this.router.navigate(['/'])
        },
        error => {
          console.log(error);
          this.errorMessage = error.error;
          this.addPostFailed = true;
        },
        () => console.log("HTTP Request complete")
      );
    } else {
      this.errorMessage = 'Please fill all the required fields';
      this.addPostFailed = true;
    }
  }*/

  onSubmit(){}

  get name() { return this.editPetForm.get('name'); }

  get idCode() { return this.editPetForm.get('idCode'); }

  get animal() { return this.editPetForm.get('animal') };

  get color() { return this.editPetForm.get('color') };

  get country() { return this.editPetForm.get('country') };




}
