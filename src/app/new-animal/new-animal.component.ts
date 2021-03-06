import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model'

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {
  @Input() childShowAdd: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() closeMenuSender = new EventEmitter();
  submitAnimal(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    const newAnimalAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalAdd);
  }

  closeMenu() {
    this.childShowAdd = !this.childShowAdd
  }
  constructor() { }

  ngOnInit() {
  }

}
