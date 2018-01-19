import { Component } from '@angular/core';
import { Animal } from './animal.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Zoologists Zoo Zone';
  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "North Prison", 5, "Female", "Cool Shade", "Zoos"),
    new Animal("Elephant", "Roger", 12, "Herbivore", "North Prison", 12, "Male", "Cool Shade", "Zoos"),
    new Animal("Tiger", "Sunshine", 8, "Carnivore", "North Prison", 5, "Female", "Cool Shade", "Zoos")
  ];

  addAnimal(newAnimalFromChild: Animal) {
  this.masterAnimalList.push(newAnimalFromChild);
}
}
