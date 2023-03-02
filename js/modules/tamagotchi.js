export default class Tamagotchi {
  constructor() {
    this.health = { value: 10, importance: 1, element: null };
    this.hunger = { value: 10, importance: 3, element: null };
    this.energy = { value: 10, importance: 2, element: null };
    this.fun = { value: 10, importance: 4, element: null };
    console.log("Tamagotchi initialized");

    this.healthDecrease = setInterval(() => {
      if (this.hunger.value <= 0 || this.energy.value <= 0) {
        this.health.value -= 1;
        this.displayHealth(this.health.element);
        if (this.health.value <= 0) {
          console.log("💀");
          clearInterval(this.health.element);
        }
      }
    }, 1000);

    this.hungerDecrease = setInterval(() => {
      this.hunger.value -= 1;
      this.displayHunger(this.hunger.element);
      if (this.hunger.value <= 0) {
        console.log("💀");
        clearInterval(this.hunger.element);
      }
    }, 1000);

    this.energyDecrease = setInterval(() => {
      let decrementValue = 1;
      if (this.fun.value <= 0) {
        decrementValue = 2;
      }
      this.energy.value -= decrementValue;
      if (this.energy.value < 0) {
        this.energy.value = 0;
      }
      this.displayEnergy(this.energy.element);
      if (this.energy.value <= 0) {
        console.log("💀");
        clearInterval(this.energy.element);
      }
    }, 2000);

    this.funDecrease = setInterval(() => {
      this.fun.value -= 1;
      this.displayFun(this.fun.element);
      if (this.fun.value <= 0) {
        console.log("💀");
        clearInterval(this.fun.element);
      }
    }, 1000);
  }

  displayHealth = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.health.value;
  };

  displayHunger = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.hunger.value;
  };

  displayEnergy = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.energy.value;
  };

  displayFun = (elementSelector) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this.fun.value;
  };

  mount = ({ healthElement, hungerElement, energyElement, funElement }) => {
    this.health.element = healthElement;
    this.displayHealth(this.health.element);
    this.hunger.element = hungerElement;
    this.displayHunger(this.hunger.element);
    this.energy.element = energyElement;
    this.displayEnergy(this.energy.element);
    this.fun.element = funElement;
    this.displayFun(this.fun.element);
  };
}
