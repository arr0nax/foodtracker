import { Component } from '@angular/core';
import { Food } from './food.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>
  <food-list [foods]='foods'></food-list>
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food('jamburger', 'a hamburger with jam on it. looks gross but tastes good', 800),
    new Food('pizza-gravy-dinnner', 'a combination of old pizza and thanksgiving dinner gravy', 1100),
    new Food('chicken-strips and garlic fries', 'the classic newell - chicken strips extra crispy', 950)
  ];

}
