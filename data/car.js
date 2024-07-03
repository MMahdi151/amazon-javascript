class Car {
  #brand;
  #model;
  speed;
  #isTrunkOpen;

  constructor(car) {
    this.#brand = car.brand;
    this.#model = car.model;
    this.speed = car.speed;
    this.#isTrunkOpen = car.isTrunkOpen;
  }

  go() {
    if (this.speed < 200 && !this.isTrunkOpen) {
      if (this.acceleration) {
        this.speed += this.acceleration;
      } else if (!this.acceleration) {
        this.speed += 5;
      }
    } else if (this.speed >= 200) {
      this.speed = 200;
    }
  }
  brake() {
    if (this.speed) {
      this.speed -= 5;
    } else {
      this.speed = 0;
    }
  }

  displayInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Open trunk: ${
        this.#isTrunkOpen
      }`
    );
  }

  openTrunk() {
    if (!this.type === "race") {
      if (!this.isTrunkOpen && this.speed === 0) {
        this.isTrunkOpen = true;
      }
    }
  }
  closeTrunk() {
    if (!this.type === "race") {
      if (this.isTrunkOpen) {
        this.isTrunkOpen = false;
      }
    }
  }
}

class RaceCar extends Car {
  #brand;
  #model;
  acceleration;

  constructor(car) {
    super(car);
    this.#model = car.model;
    this.#brand = car.brand;
    this.acceleration = car.acceleration;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h`);
  }
}

const cars = [
  {
    brand: "Toyota",
    model: "Corolla",
    speed: 0,
    isTrunkOpen: true,
  },
  {
    brand: "Tesla",
    model: "Model 3",
    speed: 0,
    isTrunkOpen: true,
  },
  {
    brand: "McLaren",
    model: "F1",
    speed: 0,
    acceleration: 20,
    type: "race",
  },
].map((car) => {
  if (car.type === "race") {
    return new RaceCar(car);
  }
  return new Car(car);
});

cars[0].go();
cars[0].openTrunk();
cars[1].brake();
cars[1].closeTrunk();
cars[1].go();
cars[2].closeTrunk();
cars[2].go();

console.log(cars);

cars.forEach((car) => {
  car.displayInfo();
});
