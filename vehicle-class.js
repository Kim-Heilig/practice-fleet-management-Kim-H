/** @format */

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
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }
  drive(distance) {
    return (this.mileage += distance);
  }
  describe() {
    console.log(
      `This fantastic ${this.type} is a ${this.make} ${this.year} ${this.model} and has ${this.mileage}.`
    );
  }
}

let car = new Vehicle("SUV", "Honda", "CRV", 2020, 40000);

let truck = new Vehicle("truck", "Ford", "F150", 2022, 29000);

let motorcycle = new Vehicle("motorcycle", "Suzuki", "XYZmodel", 2018, 63892);

console.log(car);
console.log(truck);
console.log(motorcycle);

car.describe();
truck.describe();
motorcycle.describe();

console.log(
  `The mileage of this car was ${car.mileage} is now ${car.drive(10985)}`
);
console.log(
  `The mileage of this truck was ${truck.mileage} is now ${truck.drive(1)}`
);
console.log(
  `The mileage of this motorcycle was ${
    motorcycle.mileage
  } is now ${motorcycle.drive(1347823874)}`
);

//////////////  PRACTICE WITH THE LAUNDER/CLOTHING EXERCISE /////////////////

// Clothing
// Define a Clothing class with properties name, color, material, and isDirty.
// isDirty should always be false at instantiation of an object.
// Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read differently depending on whether the clothing item is dirty or not.
// Add a wear() method outside the constructor that changes the value of isDirty and prints a notification.
// Add a launder() method outside the constructor that changes the value of isDirty and prints a notification.
// Instantiate at least 3 different kinds of clothing with unique properties.
// Use the describe() method to print descriptions of each clothing item.
// Use the wear() method on two of the clothing items.
// Use the launder() method on one of the dirty clothing items and describe() it again.

class Clothing {
  constructor(name, color, material, isDirty) {
    this.name = name;
    this.color = color;
    this.material = material;
    this.isDirty = false;
  }
  describe() {
    if (this.isDirty) {
      console.log(
        `Please launder this ${this.color} ${this.name} made of ${this.material}.  It is dirty and stinky.`
      );
    } else {
      console.log(
        `Your ${this.color} ${this.name} made of ${this.material} can be worn.`
      );
    }
  }
  wear() {
    this.isDirty = true;
    console.log(`This ${this.name} has been worn and needs to be laundered.`);
  }
  launder() {
    this.isDirty = false;
    console.log(`This ${this.name} has been laundered.`);
  }
}

let jacket = new Clothing("jacket", "blue", "cotton");
console.log(jacket);
let socks = new Clothing("socks", "white", "wool");
let tie = new Clothing("tie", "multicolored", "silk");
console.log(socks);
console.log(tie);
socks.describe();
tie.describe();
jacket.describe();

tie.wear();
jacket.wear();

tie.launder();

socks.describe();
tie.describe();
jacket.describe();

//////////////  PRACTICE WITH THE BEVERAGE EXERCISE /////////////////

// Define a Beverage class with properties name, ounces, container, and isCold.
// isCold should always be false at instantiation of an object.
// container should be optional and default to "bottle".
// Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read differently depending on whether the beverage is cold or not.
// Add a refrigerate() method outside the constructor that changes the value of isCold and prints a notification.
// Instantiate at least 3 different kinds of beverages with unique properties.
// Use the describe() method to print descriptions of each beverage.
// Use the refrigerate() method on one of the beverages, then call describe()  again.

class Beverage {
  constructor(name, ounces, container, isCold = false) {
    this.name = name;
    this.ounces = ounces;
    this.container = container;
    this.isCold = isCold;
  }
  describe() {
    if (this.isCold) {
      console.log(
        `This ${this.ounces} ${this.container} of ${this.name} is cold.`
      );
    } else {
      console.log(
        `This ${this.ounces} ${this.container} of ${this.name} is not cold.`
      );
    }
  }
  refrigerate() {
    this.isCold = true;
    console.log(`The ${this.name} is cold.`);
  }
}

let cola = new Beverage("Pepsi", 12, "can", (this.isCold = true));
let coffee = new Beverage("coffee", 8, "mug");
let lemonade = new Beverage("lemonade", 8, "bottle", (this.isCold = true));

console.log(cola);
console.log(coffee);
console.log(lemonade);

cola.describe();
coffee.describe();
lemonade.describe();

coffee.refrigerate();
coffee.describe();
