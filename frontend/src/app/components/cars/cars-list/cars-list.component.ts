import { Component, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../../../models/car/car';
import { CommonModule } from '@angular/common';
import { CarsModalComponent } from '../cars-modal/cars-modal.component';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-cars-list',
  imports: [RouterLink, CommonModule, CarsModalComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
  @ViewChild(CarsModalComponent) modal!: CarsModalComponent;
  carInEditing: Car | null = null;
  carList: Car[] = [];
  carService = inject(CarService);

  getAllCars() {
    this.carService.getAllCars().subscribe({
      next: (list) => {
        this.carList = [...list];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteCar(carToDelete: Car) {
    this.carService.deleteCar(carToDelete).subscribe({
      next: () => {
        this.carList = this.carList.filter((car) => car.id !== carToDelete.id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  constructor() {
    this.getAllCars();
  }

  edit(car: Car) {
    this.carInEditing = car;
    this.modal.openModal();
  }

  resetCarInEditing() {
    this.carInEditing = null;
  }
}
