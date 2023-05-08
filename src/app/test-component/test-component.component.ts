
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { PetService } from '../service/pets.service';
import { FormGroup, FormControl } from '@angular/forms';
import { OptionService } from '../service/option-service.component';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit{
  title = 'TestComponentComponent';
  @Input() idCodeInput: string;
  @Input() nameInput: string;
  @Input() colorInput: string;
  @Input() animalInput: string;
  @Input() countryInput: string;
  @Input() editForm: boolean;
  @Input() titleInput: string;
  @Input() previousId: number;


  addPostForm: FormGroup;

  colorList: any;

  animalList: any;

  countryList: any;
  
  errorMessage: string;

  addPostFailed: any;

  formSubmitted: boolean;

  constructor(private petService: PetService, private optionService: OptionService, private router: Router){ 
    
  }
    

  ngOnInit(){



    this.addPostForm = new FormGroup({
      idCode: new FormControl(this.idCodeInput, Validators.required),
      name: new FormControl(this.nameInput, Validators.required),
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
      
      
      
      const selectedColor = this.colorList.find(color => color.name === this.colorInput);
      const selectedCountry = this.countryList.find(country => country.name === this.countryInput);
      const selectedAnimal = this.animalList.find(animal => animal.name === this.animalInput);

      
      this.addPostForm.controls['color'].setValue(selectedColor);
      this.addPostForm.controls['country'].setValue(selectedCountry);
      this.addPostForm.controls['animal'].setValue(selectedAnimal);
    });
  }

  

  onSubmit(){
    this.formSubmitted = true;
    if(this.addPostForm.valid){
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
    }else{
      this.errorMessage = 'Please fill all the required fields';
      this.addPostFailed = true;
    }
  }

  

  get name() { return this.addPostForm.get('name'); }

  get idCode() { return this.addPostForm.get('idCode'); }

  get animal() { return this.addPostForm.get('animal')};

  get color() { return this.addPostForm.get('color')};

  get country() { return this.addPostForm.get('country')};
   



}
