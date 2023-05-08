import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PetService } from '../service/pets.service';
import { Pet } from '../models/Pet';
import { SortableHeaderDirective, SortEvent, compare } from 'src/sortable.header.directive';
@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})

export class MainviewComponent implements OnInit {
  pets: Pet[] = [];
  data: Pet[] = [];

  petToUpdate: Pet;
  
  
  constructor(public petService: PetService){}

  ngOnInit(): void {
    this.petService.getPets().subscribe((response => {
        this.pets = response;
        this.data = response;
      }
      
    ));
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

  reverseArray(){
    this.pets = this.data.reverse();
  }

  
  edit(pet: Pet){
    console.log(pet);
    this.petToUpdate = pet;
  }
  
}


 