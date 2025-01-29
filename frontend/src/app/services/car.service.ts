import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Car } from '../models/car/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  http = inject(HttpClient);
  API = 'http://localhost:8082/cars';

  constructor() {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.API);
  }

  deleteCar(car: Car): Observable<boolean> {
    return this.http.delete<boolean>(this.API, { body: car });
  }

  saveCar(car: Car): Observable<boolean> {
    return this.http.post<boolean>(this.API, car);
  }

  editCar(car: Car): Observable<boolean> {
    return this.http.put<boolean>(this.API, car);
  }
}
