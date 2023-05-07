import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pets.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OptionService } from '../service/option-service.component';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit{
  title = 'AddPost';

  addPostForm: FormGroup;

  colorList: any;

  animalList: any;

  countryList: any;

  constructor(private petService: PetService, private optionService: OptionService){ 
    
  }
    

  ngOnInit(){

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
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
      
    });

    this.addPostForm.markAsPristine();

  }

  onSubmit(){
    console.log(this.addPostForm.value);

  }

  get name() { return this.addPostForm.get('name'); }

  get code() { return this.addPostForm.get('code'); }

  get animal() { return this.addPostForm.get('animal')};

  get color() { return this.addPostForm.get('color')};

  get country() { return this.addPostForm.get('country')};
   



}
