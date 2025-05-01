class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}
const s = new Shape();
const c = new Circle();
s.draw(); // Drawing a shape
c.draw(); // Drawing a circle
