import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pets.service';
import { Pet } from '../models/Pet';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  pets: Pet[] = [];

  constructor(public petService: PetService){}

  ngOnInit(): void {
    this.petService.getPets().subscribe((response => {
        this.pets = response;
      }
    ))
  }
}


 