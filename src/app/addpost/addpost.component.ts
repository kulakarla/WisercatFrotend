import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pets.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit{
  title = 'AddPost';

  addPostForm: FormGroup;

  constructor(private petService: PetService){ 
    
  }
    

  ngOnInit(){
    this.addPostForm = new FormGroup({
      code: new FormControl(''),
      name: new FormControl(''),
      color: new FormControl(''),
      animal: new FormControl(''),
      country: new FormControl('')
      
    });

  }

  onSubmit(){
    console.log(this.addPostForm.value);

  }

   



}
