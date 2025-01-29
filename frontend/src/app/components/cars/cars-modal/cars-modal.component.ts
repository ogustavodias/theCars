import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../models/car/car';

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
  carNameInInput = '';

  ngOnChanges(changes: SimpleChanges): void {
    let carEdit = changes['carInEditing'];
    if (carEdit) {
      this.carNameInInput = carEdit?.currentValue?.name || '';
    }
  }

  save() {
    console.log(`Salvando o carro ${this.carNameInInput}`);
  }

  delete(car: Car) {
    console.log(`Deletando o carro ${car.name}`);
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.carInEditingReset.emit();
  }

  checkOutsideClick(e: Event) {
    if (e.target === e.currentTarget) this.closeModal();
  }
}
