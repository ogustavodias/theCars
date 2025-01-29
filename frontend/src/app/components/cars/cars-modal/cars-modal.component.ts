import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../models/car/car';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-cars-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './cars-modal.component.html',
  styleUrl: './cars-modal.component.scss',
})
export class CarsModalComponent implements OnChanges {
  isOpen = false;
  @Input() carInEditing!: Car | null;
  @Output() carInEditingReset = new EventEmitter<void>();
  @Output() refreshList = new EventEmitter<void>();
  carNameInInput = '';
  carService = inject(CarService);

  ngOnChanges(changes: SimpleChanges): void {
    let carEdit = changes['carInEditing'];
    if (carEdit) {
      this.carNameInInput = carEdit?.currentValue?.name || '';
    }
  }

  saveCar() {
    let carToSave: Car = {
      id: this.carInEditing?.id,
      name: this.carNameInInput,
    };

    let operation = carToSave.id
      ? this.carService.editCar(carToSave)
      : this.carService.saveCar(carToSave);

    operation.subscribe({
      next: () => {
        this.refreshList.emit();
        this.closeModal();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.carNameInInput = '';
    this.carInEditingReset.emit();
  }

  checkOutsideClick(e: Event) {
    if (e.target === e.currentTarget) this.closeModal();
  }
}
