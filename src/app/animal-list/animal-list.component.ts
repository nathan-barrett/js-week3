import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();

  editAnimalClick(animalToEdit: Animal) {
    this.editSender.emit(animalToEdit);
  }
  filterByFullList: string = 'allAnimals';


  onChange(optionFromMenu) {
    this.filterByFullList = optionFromMenu;
  }




  constructor() { }

  ngOnInit() {
  }

}
