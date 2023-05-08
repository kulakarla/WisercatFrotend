import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PetService } from '../service/pets.service';
import { Pet } from '../models/Pet';
import { SortableHeaderDirective, SortEvent, compare } from 'src/sortable.header.directive';
import { Subscription, interval } from 'rxjs';
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
  
  
  constructor(public petService: PetService){}

  ngOnInit(): void {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 1000);
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
    console.log(pet);
    this.petToUpdate = pet;
  }
  
}


 