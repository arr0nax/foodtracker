import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `
  <p>hello</p>
  <div *ngFor='let food of foods'>
  <li>Name: {{food.name}}</li>
  <li>Description: {{food.description}}</li>
  <li>Calories: {{food.calories}}</li>
  </div>
  `
})

export class FoodListComponent {
  @Input() foods: Food[];

}
