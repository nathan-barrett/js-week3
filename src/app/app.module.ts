import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    NewAnimalComponent,
    EditAnimalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
