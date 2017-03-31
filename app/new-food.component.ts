import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template:`
  <h1>add a food</h1>
  <div>
    <div class="form-group">
      <label>Enter Food Name</label>
      <textarea #newName></textarea>
    </div>
    <div class="form-group">
      <label>Enter Food Description</label>
      <textarea #newDescription></textarea>
    </div>
    <div class="form-group">
      <label>Enter Food Calories</label>
      <textarea #newCalories></textarea>
    </div>
    <button (click)="submitForm(newName.value, newDescription.value, newCalories.value); newName.value=''; newDescription.value=''; newCalories.value='';">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, description: string, calories: number) {
    var newFood: Food = new Food(name, description, calories);
    this.newFoodSender.emit(newFood);
  }
}
