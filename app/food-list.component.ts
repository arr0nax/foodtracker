import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'food-list',
  template: `
  <select
  (change)="onCaloriesChange($event.target.value)">
    <option value="all">All Foods</option>
    <option value="high">High Calorie Foods</option>
    <option value="low">Low Calorie Foods</option>
  </select>
  <div *ngFor='let food of foods | calories:filterByCalories'>
  <ul (click)='selectFood(food)'>
  <li>Name: {{food.name}}</li>
  <li>Description: {{food.description}}</li>
  <li>Calories: {{food.calories}}</li>
  <button (click)='eatFood(food.calories)'>Eat It!</button>
  </ul>
  </div>
  `
})

export class FoodListComponent {
  @Input() foods: Food[];
  @Output() clickSender = new EventEmitter();
  @Output() calorieSender = new EventEmitter();

  filterByCalories: string = 'all';

  selectFood(food: Food) {
    this.clickSender.emit(food);
  }

  eatFood(calories) {
    calories = parseInt(calories);
    this.calorieSender.emit(calories);
  }


  onCaloriesChange(option) {
    this.filterByCalories = option;
  }
}
