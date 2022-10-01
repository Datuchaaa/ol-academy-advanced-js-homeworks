

  function createCar(make, model, year, ) {
      return {
        make: make,
        model: model,
        year: year,
        owners: [],
       
        getCarInfo() {
          return `${this.make} ${this.model} released in ${this.year}`;
        },
        addOwner(owner) {
          this.owners.push(owner);
         },
         removeOwner(owner) {
            this.owners.splice(owner, 1);
         },
         getOwnersCount() {
          return  this.owners.length;
         },
        
         getOwnerNames() {
           return this.owners   // ??? 😒😒
         },
         getFullInfo() {
           return `${this.make} ${this.model} released in ${this.year} ${this.getOwnersCount()} person owns this car. `
         }
      }
 
    
 
  }
  

let duti_picoti = createCar("BMW", "525", "1999"), stodevianosto = createCar("Mercedes", "E190", 1991);

console.log(duti_picoti.owners)

// getOwnerNames
// getOwnersCount


function createPerson (name, surname, age, gender, cars = []){
  return {
    name: name,
    surname: surname,
    age: age,
    gender: gender,
    cars: cars,
    fullName()  {
      return `${this.name}  ${this.surname}`;
    },
    countCars() {
      return this.cars.length
    },
    buysCar(carType) {
       this.cars.push(carType)
    },
    sellsCar(carType) {
      this.cars.splice(carType, 1)
    },
    getAllCarsInfo() {
      let cars = ' ';
      for(let i = 0; i < this.cars.length; i++){
        // console.log(this.cars[i].make)
        cars += `${this.cars[i].getCarInfo()} `
      }
      // console.log(cars)
      
      return `${this.name} owns these cars: ${cars}`  
    }
  }
  
}

let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []), ilona = createPerson("Elon", "Musk", 30, "M");




daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log(daniel916)
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