import { Component } from '@angular/core';
import { Food } from './food.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `

  <div class='emojis' *ngFor='let emoji of safeEmojis'>
    <div [innerHTML]=emoji></div>
  </div>
  <h1>FoodTracker</h1>
  <h3>click a food to edit it</h3>
  <h1>Your Calories: {{totalCalories}}</h1>
  <food-list [foods]='foods' (clickSender)='selectFood($event)' (calorieSender)='addCalories($event)'></food-list>
  <new-food (newFoodSender)='newFood($event)'></new-food>
  <edit-food [selectedFood]='selectedFood' (clickSender)='finishedEditing()'></edit-food>
  `
})

export class AppComponent {

  constructor(private sanitzer: DomSanitizer){ }
  foods: Food[] = [
    new Food('jamburger', 'a hamburger with jam on it. looks gross but tastes good', 800),
    new Food('pizza-gravy-dinnner', 'a combination of old pizza and thanksgiving dinner gravy', 1100),
    new Food('chicken-strips and garlic fries', 'the classic newell - chicken strips extra crispy', 950)
  ];

  selectedFood = null;
  totalCalories = 0;
  public safeEmojis: SafeHtml[] = [];
  emojis = ['🧀','🥑','🍕','🌭','🌮','🌯','🍔','🍟','🥓','🍖'];

  newFood(food) {
    this.foods.push(food);
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  selectFood(food) {
    if(food === this.selectedFood) {
      this.selectedFood = null;
    } else {
      this.selectedFood = food;
    }
  }

  addCalories(calories) {
    this.totalCalories += calories;
    var randomHeight = Math.floor(Math.random()*1600);
    var randomEmoji = Math.floor(Math.random()*10);
    var randomSpeed = Math.floor(Math.random()*20-10)+10;
    var addEmojis = '<div class="emoji" style="position:absolute;top:'+randomHeight+'px;left:-100px;  animation: move '+randomSpeed+'s;"><h1>'+this.emojis[randomEmoji]+'</h1></div>';
    this.safeEmojis.push(this.sanitzer.bypassSecurityTrustHtml(addEmojis));
  }

}
