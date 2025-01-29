package com.cars.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cars.backend.models.Car;
import com.cars.backend.repository.CarRepository;

@Service
public class CarService {

  @Autowired
  private CarRepository repository;

  public boolean saveCar(Car car) {
    return repository.save(car) != null;
  }

  public boolean deleteCar(Car car) {
    repository.delete(car);
    return true;
  }

  public List<Car> getAllCars() {
    return repository.findAll();
  }

}
