import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodDisplayComponent } from './display-food.component';
import { FoodEditComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'food-list',
  inputs: ['allFood'],
  directives: [FoodDisplayComponent, FoodEditComponent, NewFoodComponent],
  pipes: [CaloriePipe],
  template: `
    <div class="foodList">
      <p id="createNotice" (click)='creatingNewFood = true'>Add New Food</p>
      <select (change)="onChange($event.target.value)">
        <option value="high">High Calorie Food Items</option>
        <option value="low">Low Calorie Food Items</option>
        <option value="all" selected="selected">All Food Items</option>
      </select>
      <div class="row">
        <div class="col-md-4">
          <food-display
          *ngFor='#foodItem of allFood | caloriePipe:calorieLevel' 
            [food]='foodItem'
            (click)='foodItemClicked(foodItem)'
            [class.selected]='foodItem === selectedFood'>
          </food-display>
        </div>
        <new-food class="col-md-7" *ngIf='creatingNewFood === true' (onNewFoodSubmit)='addNewFood($event)'>
        </new-food>
      </div>
      <food-edit
        *ngIf='selectedFood'
        [food]='selectedFood'>
      </food-edit>
    </div>
  `
})

export class FoodListComponent {
  public allFood: Food[];
  public selectedFood: Food;
  public creatingNewFood: boolean = false;
  public calorieLevel: string;
  foodItemClicked(foodItem: Food) {
    this.selectedFood = foodItem;
  }
  addNewFood(foodToAdd: Food) {
    this.allFood.push(foodToAdd);
    this.creatingNewFood = false;
  }
  onChange(calorieLevelSelected: string): void {
    this.calorieLevel = calorieLevelSelected;
  }
}
