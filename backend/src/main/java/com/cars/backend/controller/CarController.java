package com.cars.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cars.backend.models.Car;
import com.cars.backend.service.CarService;

@RestController
@RequestMapping("/cars")
@CrossOrigin("*")
public class CarController {

  @Autowired
  private CarService service;

  @GetMapping
  public ResponseEntity<List<Car>> getAllCars() {
    List<Car> cars = service.getAllCars();
    return ResponseEntity.status(HttpStatus.OK).body(cars);
  }

  @PostMapping
  public ResponseEntity<Boolean> insertCar(@RequestBody Car car) {
    Boolean success = service.saveCar(car);
    return ResponseEntity.status(HttpStatus.CREATED).body(success);
  }

  @PutMapping
  public ResponseEntity<Boolean> editCar(@RequestBody Car car) {
    Boolean success = service.saveCar(car);
    return ResponseEntity.status(HttpStatus.OK).body(success);
  }

  @DeleteMapping
  public ResponseEntity<Boolean> deleteCar(@RequestBody Car car) {
    Boolean success = service.deleteCar(car);
    return ResponseEntity.status(HttpStatus.OK).body(success);
  }
}
