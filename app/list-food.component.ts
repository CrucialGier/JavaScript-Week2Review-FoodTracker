import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodDisplayComponent } from './display-food.component';
import { FoodEditComponent } from './edit-food.component';

@Component({
  selector: 'food-list',
  inputs: ['allFood'],
  directives: [FoodDisplayComponent, FoodEditComponent],
  template: `
    <food-display
    *ngFor='#foodItem of allFood'
      [food]='foodItem'
      (click)='foodItemClicked(foodItem)'
      [class.selected]='foodItem === selectedFood'>
    </food-display>
    <food-edit
    *ngIf='selectedFood'
      [food]='selectedFood'>
    </food-edit>
  `
})

export class FoodListComponent {
  public allFood: Food[];
  public selectedFood: Food;
  foodItemClicked(foodItem: Food) {
    this.selectedFood = foodItem;
  }
}
