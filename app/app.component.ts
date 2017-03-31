import { Component } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>FoodTracker</h1>
  <h1>Your Calories: {{totalCalories}}</h1>
  <food-list [foods]='foods' (clickSender)='selectFood($event)' (calorieSender)='addCalories($event)'></food-list>
  <new-food (newFoodSender)='newFood($event)'></new-food>
  <edit-food [selectedFood]='selectedFood' (clickSender)='finishedEditing()'></edit-food>
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food('jamburger', 'a hamburger with jam on it. looks gross but tastes good', 800),
    new Food('pizza-gravy-dinnner', 'a combination of old pizza and thanksgiving dinner gravy', 1100),
    new Food('chicken-strips and garlic fries', 'the classic newell - chicken strips extra crispy', 950)
  ];

  selectedFood = null;
  totalCalories = 0;

  newFood(food) {
    this.foods.push(food);
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  selectFood(food) {
    this.selectedFood = food;
  }

  addCalories(calories) {
    this.totalCalories += calories;
  }

}
