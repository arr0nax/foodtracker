import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf='selectedFood'>
  <h1>Edit that food</h1>
  <label>Name:</label>
  <input [(ngModel)]="selectedFood.name">
  <label>Description:</label>
  <input [(ngModel)]="selectedFood.description">
  <label>Calories:</label>
  <input [(ngModel)]="selectedFood.calories">
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
