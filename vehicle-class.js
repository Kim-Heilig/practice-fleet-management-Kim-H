// Scenario
// You’ve been hired to help a logistics company build a system to manage its fleet of vehicles. The system should be able to:
// 1. Create individual vehicles with properties like type, make, model, year, and mileage.
// 2. Add a method to update the mileage of a vehicle when it is used.
// 3. Add a method to display the details of the vehicle in a user-friendly format.
// 4. Instantiate multiple vehicles from the class and test your methods.


//Tasks

// 1. Define the Vehicle Class:
// The constructor should include properties: type, make, model, year, and mileage. ○ Use default values for mileage (e.g., 0).

console.log("***** TASK ONE: Create a class for vehicles. ******");


class Vehicle {
  constructor (type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    }
drive(distance){
    return this.mileage += distance;
  };
describe(){
  console.log(`This fantastic ${this.type} is a ${this.make} ${this.year} ${this.model} and has ${this.mileage}.`); 
  }
}

let car = new Vehicle ("SUV", "Honda", "CRV", 2020, 40000);

let truck = new Vehicle ("truck", "Ford", "F150", 2022, 29000);

let motorcycle = new Vehicle ("motorcycle", "Suzuki", "XYZmodel", 2018, 63892);

console.log(car);
console.log(truck);
console.log(motorcycle);

car.describe();
truck.describe();
motorcycle.describe();

console.log(`The mileage of this car was ${car.mileage} is now ${car.drive(10985)}`);
console.log(`The mileage of this truck was ${truck.mileage} is now ${truck.drive(1)}`);
console.log(
  `The mileage of this motorcycle was ${motorcycle.mileage} is now ${motorcycle.drive(1347823874)}`);



// 2. Add Methods: drive(distance): Increases the vehicle’s mileage by the given distance (in kilometers or miles).
// ○ getDetails(): Returns a formatted string describing the vehicle’s
// details.
// 3. Create and Use Vehicle Objects: Instantiate at least three vehicle objects with different properties (e.g., a car, a truck, and a motorcycle).
// ○ Use the drive method to simulate trips and update mileage.
// ○ Use the getDetails method to print each vehicle’s updated information.
