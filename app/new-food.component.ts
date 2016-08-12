import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onNewFoodSubmit'],
  template: `
    <div class="newFood">
      <h2>Create A New Food</h2>
      <div class="newFood-form">
        <input placeholder="name of food" #newName/>
        <input placeholder="notes" #newNote/>
        <input placeholder="calorie count" #newCalorie/>
        <button class="btn btn-default" (click)='createFood(newName, newNote, newCalorie)'>Submit</button>
      </div>
    </div>
  `
})

export class NewFoodComponent {
  public onNewFoodSubmit: EventEmitter<Food>;
  constructor(){
    this.onNewFoodSubmit = new EventEmitter();
  }
  createFood(newName: HTMLInputElement, newNote: HTMLInputElement, newCalorie: HTMLInputElement) {
    var newFood: Food = new Food(newName.value, newNote.value, parseInt(newCalorie.value));
    this.onNewFoodSubmit.emit(newFood);
  }
}
