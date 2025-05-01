class Vehicle {
  start() {
    throw new Error("start() must be implemented");
  }
}
class Bike extends Vehicle {
  start() {
    console.log("Bike started");
  }
}
const b = new Bike();
b.start(); // Bike started
