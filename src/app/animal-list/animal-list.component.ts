import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Input() childShowAdd: boolean;
  @Output() editSender = new EventEmitter();
  @Output() showAddSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();

  editAnimalClick(animalToEdit: Animal) {
    this.editSender.emit(animalToEdit);
  }
  filterByFullList: string = 'allAnimals';


  onChange(optionFromMenu) {
    this.filterByFullList = optionFromMenu;
  }

  addClicked() {
    this.showAddSender.emit();
  }
  deleteAnimalClicked(animalToDelete: Animal) {
    this.deleteSender.emit(animalToDelete);
  }
  constructor() { }

  ngOnInit() {
  }

}
