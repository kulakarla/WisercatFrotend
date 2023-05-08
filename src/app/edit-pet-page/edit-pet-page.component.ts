import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PetService } from '../service/pets.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OptionService } from '../service/option-service.component';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../models/Pet';
import { combineLatest } from 'rxjs';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-edit-pet-page',
  templateUrl: './edit-pet-page.component.html',
  styleUrls: ['./edit-pet-page.component.css']
})
export class EditPetPageComponent {
  title = 'EditPet';


  editPetForm: FormGroup;

  colorList: any;

  animalList: any;

  countryList: any;

  errorMessage: string;

  editPetFailed: any;

  formSubmitted: boolean;

  editPetId: number;

  petInput: any;

  constructor(private petService: PetService, private optionService: OptionService, private router: Router, private storageService: StorageService) {

  }


  ngOnInit() {

    console.log("JOU")
    this.petInput = this.storageService.getPet();
    console.log(this.petInput);
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
      this.editPetId = this.petInput.id;

      this.editPetForm.controls['color'].setValue(selectedColor);
      this.editPetForm.controls['country'].setValue(selectedCountry);
      this.editPetForm.controls['animal'].setValue(selectedAnimal);
    })
  }

  onSubmit(){
    this.formSubmitted = true;
    if(this.editPetForm.valid){
      const fullPetResponse = {
        id: this.editPetId,
        name: this.editPetForm.value.name,
        idCode: this.editPetForm.value.idCode,
        color: this.editPetForm.value.color.name,
        animal: this.editPetForm.value.animal.name,
        country: this.editPetForm.value.country.name
      }
      this.petService.editPet(fullPetResponse).subscribe(
        res => {
          console.log(res);
          this.editPetFailed = false;
          //window.location.reload();
          this.router.navigate(["/"]);

        },
        error => {
          console.log(error);
          this.errorMessage = error.error;
          this.editPetFailed = true;
        },
        () => console.log("HTTP Request complete")
      );
    }else{
      this.errorMessage = 'Please fill all the required fields';
      this.editPetFailed = true;
    }
    
  }

  get name() { return this.editPetForm.get('name'); }

  get idCode() { return this.editPetForm.get('idCode'); }

  get animal() { return this.editPetForm.get('animal') };

  get color() { return this.editPetForm.get('color') };

  get country() { return this.editPetForm.get('country') };

  
}
