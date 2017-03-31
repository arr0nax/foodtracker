import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor='let food of foods'>
  <ul (click)='selectFood(food)'>
  <li>Name: {{food.name}}</li>
  <li>Description: {{food.description}}</li>
  <li>Calories: {{food.calories}}</li>
  </ul>
  </div>
  `
})

export class FoodListComponent {
  @Input() foods: Food[];
  @Output() clickSender = new EventEmitter();


  selectFood(food: Food) {
    this.clickSender.emit(food);
  }
}
