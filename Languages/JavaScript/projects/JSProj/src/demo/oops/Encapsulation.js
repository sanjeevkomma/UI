class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} is driving at ${this.speed} km/h.`);
  }
}

const myCar = new Car("Toyota", 120);
myCar.drive(); // Toyota is driving at 120 km/h.
