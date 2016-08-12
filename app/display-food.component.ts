import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <p class="foodListItem">{{ food.name }}</p>
  `
})

export class FoodDisplayComponent {
  public food: Food;
}
