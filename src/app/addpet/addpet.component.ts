import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pets.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OptionService } from '../service/option-service.component';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddPetComponent implements OnInit {
  title = 'AddPet';

  addPetForm: FormGroup;

  colorList: any;

  animalList: any;

  countryList: any;

  errorMessage: string;

  addPetFailed: any;

  formSubmitted: boolean;

  constructor(private petService: PetService, private optionService: OptionService, private router: Router) {

  }


  ngOnInit() {

    this.optionService.getAnimals().subscribe((response => {
      this.animalList = response;
    }));

    this.optionService.getColors().subscribe((response => {
      this.colorList = response;
    }));

    this.optionService.getCountries().subscribe((response => {
      this.countryList = response;
    }));



    this.addPetForm = new FormGroup({
      idCode: new FormControl('', [ Validators.required, Validators.pattern("[0-9]{8}")]),
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });


  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.addPetForm.valid) {
      console.log(this.addPetForm.value);
      this.petService.addPet(this.addPetForm.value).subscribe(
        response => {
          console.log(response);
          this.addPetFailed = false;
          this.router.navigate(['/'])
        },
        error => {
          console.log(error);
          this.errorMessage = error.error;
          this.addPetFailed = true;
        },
        () => console.log("HTTP Request complete")
      );
    } else {
      this.errorMessage = 'Please fill all the required fields';
      this.addPetFailed = true;
    }
  }

  get name() { return this.addPetForm.get('name'); }

  get idCode() { return this.addPetForm.get('idCode'); }

  get animal() { return this.addPetForm.get('animal') };

  get color() { return this.addPetForm.get('color') };

  get country() { return this.addPetForm.get('country') };



}
