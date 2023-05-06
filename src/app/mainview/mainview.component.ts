import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pets.service';
import { Pet } from '../models/Pet';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  pets: Pet[] = [];

  constructor(public petService: PetService, private authService: AuthService){}

  ngOnInit(): void {
    this.petService.getPets().subscribe((response => {
        this.pets = response;
      }
    ))
  }

  logout(){
    this.authService.logout();
  }
}


 