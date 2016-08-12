import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-edit',
  inputs: ['food'],
  template: `
    <div class="editFood">
    <p id="editNotice">Click a detail to Edit</p>
      <h1
      (click)='detailClicked("name")'>{{ food.name }}</h1>
      <input class="editInput" [(ngModel)]='food.name' *ngIf='selectedDetail === "name"'/>
      <h2 (click)='detailClicked("details")'><span class='detailHeader'>Note: </span>{{ food.details }}</h2>
      <input class="editInput" [(ngModel)]='food.details' *ngIf='selectedDetail === "details"'/>
      <h2 (click)='detailClicked("calories")'><span class='detailHeader'>Calories: </span>{{ food.calories }}</h2>
      <input class="editInput" [(ngModel)]='food.calories' *ngIf='selectedDetail === "calories"'/>
    </div>
  `
})

export class FoodEditComponent {
  public food: Food;
  public selectedDetail: string;
  detailClicked(clickedDetail: string) {
    this.selectedDetail = clickedDetail;
  }
}
