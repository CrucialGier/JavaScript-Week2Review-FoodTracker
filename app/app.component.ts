import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './list-food.component';

@Component({
  selector: 'food-tracker-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food Tracker</h1>
      <food-list [allFood]='allFood'></food-list>
    </div>
  `
})

export class AppComponent {
 public allFood: Food[];
 constructor(){
   this.allFood = [
     new Food("Tabouli Salad", "Healthy and clean", 120),
     new Food("Coffee", "A big one", 80),
     new Food("Super Star sandwitch", "And i was doing so well... =P", 850)
   ]
 }
}
