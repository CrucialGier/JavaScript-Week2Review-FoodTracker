import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodDisplayComponent } from './display-food.component';
import { FoodEditComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'food-list',
  inputs: ['allFood'],
  directives: [FoodDisplayComponent, FoodEditComponent, NewFoodComponent],
  template: `
    <p id="createNotice" (click)='creatingNewFood = true'>Add New Food</p>
    <food-display
    *ngFor='#foodItem of allFood'
      [food]='foodItem'
      (click)='foodItemClicked(foodItem)'
      [class.selected]='foodItem === selectedFood'>
    </food-display>
    <new-food *ngIf='creatingNewFood === true' (onNewFoodSubmit)='addNewFood($event)'></new-food>
    <food-edit
      *ngIf='selectedFood'
      [food]='selectedFood'>
    </food-edit>
  `
})

export class FoodListComponent {
  public allFood: Food[];
  public selectedFood: Food;
  public creatingNewFood: boolean = false;
  foodItemClicked(foodItem: Food) {
    this.selectedFood = foodItem;
  }
  addNewFood(foodToAdd: Food) {
    this.allFood.push(foodToAdd);
    this.creatingNewFood = false;
  }
}
