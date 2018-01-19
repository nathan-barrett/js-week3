import { Component } from '@angular/core';
import { Animal } from './animal.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedAnimal = null;
  showAdd: boolean = false;
  title = 'Welcome to the Zoologists Zoo Zone';
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "North Prison", 5, "Female", "Cool Shade", "Zoos"),
    new Animal("Elephant", "Roger", 12, "Herbivore", "North Feature", 12, "Male", "Peanuts", "Zoos"),
    new Animal("Tiger", "Sunshine", 8, "Carnivore", "West Prison", 5, "Female", "Fresh Antelope", "Zoos"),
    new Animal("Cat", "Beemer", 8, "Carnivore", "that one chair", 8, "Male", "Being Left Alone", "Zoos"),
    new Animal("Squirrel", "Bert", 8, "Herbivore", "any tree", 5, "Female", "nutz", "Zoos")
  ];
  //Function to add new animal to master list of animals //
  addAnimal(newAnimalFromChild: Animal) {
  this.masterAnimalList.push(newAnimalFromChild);
  }
  //Function to edit selected Animal //
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing() {
    this.selectedAnimal = null;
  }
  deleteAnimal(deleteAnimalFromChild: Animal, index: number) {
    this.masterAnimalList.splice(deleteAnimalFromChild, 1);
  }

  showAddMenu(showAdd) {
    this.showAdd = !this.showAdd;
  }
}
