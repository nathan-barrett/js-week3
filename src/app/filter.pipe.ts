import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(input: Animal[], filteredList) {
    const output: Animal[] =  [];
    if(filteredList === "youngerAnimals") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filteredList === "olderAnimals") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filteredList === "onlyMale") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].sex === "Male") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filteredList === "onlyFemale") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].sex === "Female") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filteredList === "onlyPlants") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet === "Herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filteredList === "onlyMeat") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet === "Carnivore" || input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
