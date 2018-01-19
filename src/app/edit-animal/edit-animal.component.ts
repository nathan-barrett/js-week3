import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model'

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() finishEditingSender = new EventEmitter();

  finishedEditingClicked() {
    this.finishEditingSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
