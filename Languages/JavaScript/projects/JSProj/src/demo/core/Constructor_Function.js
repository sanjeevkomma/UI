function Alien(name, tech) {
  this.name = name;
  this.tech = tech;
  this.work = function() {
    console.log("Solving bugs from 12 hours");
  }
// return 7;
}

let alien1 = new Alien('Sanjeev', 'JS');
console.log(alien1); // Alien { name: 'Sanjeev', tech: 'JS', work: [Function (anonymous)] }

let alien2 = new Alien('Sanav', 'Java');
console.log(alien2); // Alien { name: 'Sanav', tech: 'Java', work: [Function (anonymous)] }

alien2.work(); // Solving bugs from 12 hours -- calling function work()
