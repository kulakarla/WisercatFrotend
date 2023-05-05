import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Pet } from '../models/Pet';
import { User } from '../models/User'


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  title = 'AddPost';


  constructor(private petService: PetService){ }
    

  



}
