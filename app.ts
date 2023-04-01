abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    rent(): void {
      if (this.isRented()) {
        console.log(`${this.getMake()} ${this.getModel()} is already rented.`);
      } else {
        this.setRented(true);
        console.log(`${this.getMake()} ${this.getModel()} has been rented.`);
      }
    }
  
    return(): void {
      if (this.isRented()) {
        this.setRented(false);
        console.log(`${this.getMake()} ${this.getModel()} has been returned.`);
      } else {
        console.log(`${this.getMake()} ${this.getModel()} is not rented.`);
      }
    }
  
    abstract rentalRate(): number;
  }
  
  class Car extends Vehicle {
    private numSeats: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, numSeats: number) {
      super(make, model, year, rented);
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {
      return 30000; // Rs30000/day for a car
    }
  
    getNumSeats(): number {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    private payloadCapacity: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, payloadCapacity: number) {
      super(make, model, year, rented);
      this.payloadCapacity = payloadCapacity;
    }
  
    rentalRate(): number {
      return 50000; // Rs50000/day for a truck
    }
  
    getPayloadCapacity(): number {
      return this.payloadCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
      super(make, model, year, rented);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 10000; // Rs10000/day for a motorcycle
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  }
  
  // Testing the classes
  const car = new Car('Honda', 'Civic', 2021, false, 800);
  car.rent(); // Honda Civic has been rented.
  car.return(); // Honda Civic has been returned.
  
  const truck = new Truck('Ford', 'F-150', 2022, false, 2000);
  truck.rent(); // Ford F-150 has been rented.
  truck.return(); // Ford F-150 has been returned.
  
  const motorcycle = new Motorcycle('Honda', 'CD125', 2020, false, 1200);
  motorcycle.rent(); // Honda Cd125 has been rented.
  motorcycle.return(); // Honda Cd125has been returned.
  