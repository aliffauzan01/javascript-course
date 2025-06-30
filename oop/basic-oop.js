class Car {
  name;
  price;
  color;
  capacity;
  policeNumber;
  isEngineStarted = false;

  constructor({ name, price, color, capacity = 4, policeNumber }) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.capacity = capacity;
    this.policeNumber = policeNumber;
  }

  start() {
    this.isEngineStarted = true;
    console.log('Start the engine');
  }

  stop() {
    this.isEngineStarted = false;
    console.log('Stop the engine');
  }

  moveForward() {
    console.log('Move forward');
  }

  moveBackward() {
    console.log('Move backward');
  }

  brake() {
    console.log('Brake');
  }
}

// Membuat objek mobil dengan constructor function Car
const budiCar = new Car({
  name: 'BudiCar',
  price: 1000,
  color: 'Silver',
  policeNumber: 'AA-0000-AA',
});
const tiniCar = new Car({
  name: 'TiniCar',
  price: 2000,
  color: 'Black',
  capacity: 8,
  policeNumber: 'BB-0000-BB',
});

// Menampilkan nilai dari objek mobil
console.log(budiCar);
console.log(tiniCar);

// Memanggil method dari objek mobil
budiCar.start();
budiCar.moveForward();

tiniCar.start();
budiCar.moveForward();

/* Output:
  Car {
    name: 'BudiCar',
    price: 1000,
    color: 'Silver',
    capacity: 4,
    policeNumber: 'AA-0000-AA',
    isEngineStarted: false
  }
  Car {
    name: 'TiniCar',
    price: 2000,
    color: 'Black',
    capacity: 8,
    policeNumber: 'BB-0000-BB',
    isEngineStarted: false
  }
   
  Start the engine
  Move forward
  Start the engine
  Move forward
  */
