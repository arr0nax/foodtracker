import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf='selectedFood'>
    <h1>Edit that food</h1>
    <div class="form-group">
      <label>Name:</label>
      <textarea [(ngModel)]="selectedFood.name"></textarea>
    </div>
    <div class="form-group">
      <label>Description:</label>
      <textarea [(ngModel)]="selectedFood.description"></textarea>
    </div>
    <div class="form-group">
      <label>Calories:</label>
      <textarea [(ngModel)]="selectedFood.calories"></textarea>
    </div>
    <button (click)="finishedEditing()">Done</button>
  </div>

  `
})

export class EditFoodComponent {
  @Input() selectedFood: Food[];
  @Output() clickSender = new EventEmitter();

  finishedEditing() {
    this.clickSender.emit();
  }
}
