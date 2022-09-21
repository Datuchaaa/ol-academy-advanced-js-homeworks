function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getCarInfo = this.make + " " + this.model + " released in " + this.year
  
}

let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

console.log(duti_picoti.getCarInfo);





function Person(name, surname, age, gender, cars = []) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.cars = cars, (cars + 1);
  this.fullName = this.name + " " + this.surname;
  this.countCars = this.cars.length
}


let ilona = new Person("Elon", "Musk", 30, "M");
let daniel = new Person("Daniel", "Barbakadze", 21, "M", []);

console.log(daniel.countCars)

// daniel.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel.fullName(),
    countCars: daniel.countCars(),
    getAllCarsInfo: daniel.getAllCarsInfo(),
  },
  
});
