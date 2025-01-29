import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../../../models/car/car';
import { CommonModule } from '@angular/common';
import { CarsModalComponent } from '../cars-modal/cars-modal.component';

@Component({
  selector: 'app-cars-list',
  imports: [RouterLink, CommonModule, CarsModalComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
  @ViewChild(CarsModalComponent) modal!: CarsModalComponent;
  carInEditing: Car | null = null;

  carList: Car[] = [
    { id: 1, name: 'Fusion' },
    { id: 2, name: 'Territory' },
    { id: 3, name: 'Ecosport' },
    { id: 4, name: 'Focus' },
  ];

  edit(car: Car) {
    this.carInEditing = car;
    this.modal.openModal();
  }

  resetCarInEditing() {
    this.carInEditing = null;
  }
}
