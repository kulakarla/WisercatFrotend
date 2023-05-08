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

  addPostForm: FormGroup;

  colorList: any;

  animalList: any;

  countryList: any;

  errorMessage: string;

  addPostFailed: any;

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



    this.addPostForm = new FormGroup({
      idCode: new FormControl('', [ Validators.required, Validators.pattern("[0-9]{8}")]),
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });


  }

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
  }

  get name() { return this.addPostForm.get('name'); }

  get idCode() { return this.addPostForm.get('idCode'); }

  get animal() { return this.addPostForm.get('animal') };

  get color() { return this.addPostForm.get('color') };

  get country() { return this.addPostForm.get('country') };




}
