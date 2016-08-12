import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-edit',
  inputs: ['food'],
  template: `
    <div>
      <h3
      (click)='detailClicked("name")'>{{ food.name }}</h3>
      <input [(ngModel)]='food.name' *ngIf='selectedDetail === "name"'/>
      <p (click)='detailClicked("details")'>{{ food.details }}</p>
      <input [(ngModel)]='food.details' *ngIf='selectedDetail === "details"'/>
      <p (click)='detailClicked("calories")'>{{ food.calories }}</p>
      <input [(ngModel)]='food.calories' *ngIf='selectedDetail === "calories"'/>
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
