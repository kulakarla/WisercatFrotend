import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PetService } from '../service/pets.service';
import { Pet } from '../models/Pet';
import { SortableHeaderDirective, SortEvent, compare } from 'src/sortable.header.directive';
import { Subscription, interval } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from '../service/storage.service';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})



export class MainviewComponent implements OnInit {
  pets: Pet[] = [];
  data: Pet[] = [];

  petToUpdate: Pet;

  timerSubscription: Subscription;

  interval: any;

  

  formModal: any;
  
  
  constructor(public petService: PetService, public storageService: StorageService, public router: Router){}

  ngOnInit(): void {
    this.petService.getPets().subscribe((response => {
      this.pets = response;
      this.data = response;
    }));

    this.formModal = new bootstrap.Modal(document.getElementById("exampleModal"));

  }

  closeModal(){
    this.formModal.removeData();
  }



  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;

  onSort({ column, direction }: SortEvent) {
    
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
  
    
    if (direction === '' || column === '') {
      this.pets = this.data;
    } else {
      this.pets = [...this.data].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  refreshData(){
    this.petService.getPets().subscribe((response => {
      this.pets = response;
      this.data = response;
    }));
  }



  reverseArray(){
    this.pets = this.data.reverse();
  }

  
  edit(pet: Pet){
    this.petToUpdate = pet;
    this.storageService.savePet(this.petToUpdate);
    this.router.navigate(["/edit"]);
    //this.formModal.show();
  }

  
}


 