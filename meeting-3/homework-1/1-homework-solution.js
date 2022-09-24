class Car {
  constructor (make, model, year){ 
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners = [];
  }

  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  };
  
  addOwner(owner) {
   return this.owners.push(owner);
  };
  removeOwner(owner) {
    return this.owners.splice(owner);
  };
  getOwnersCount() {
    return this.owners.length;
  };
  getOwnerNames() {
    return this.owners.fullName;
  }
  getFullInfo() {
    return `${this.make} ${this.model} released in ${this.year} `
  }
}


let duti_picoti = new Car("BMW", "525", 1999);
let stodevianosto = new Car("Mercedes", "E190", 1991);

class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
    
  }
  fullName()  {
    return `${this.name}  ${this.surname}`;
  };
  countCars() {
    return this.cars.length
  }
  buysCar() {
    return this.cars.push(this.cars)
  }
  sellsCar() {
    return this.cars.splice(this.cars)
  }
  getAllCarsInfo() {
    return   `${this.name} owns these cars: `  // ?????? კონსტრუქტორ ფუნქცია Person-ში დავამატოთ მეთოდი getAllCarsInfo, რომელიც დააბრუნებს სრულ ინფორმაციას ყველა ავტომობილის შესახებ შესაბამის ფორმატში
  }
}

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");

console.log(ilona.cars)

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});