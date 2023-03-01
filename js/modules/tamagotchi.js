export default class Tamagotchi {
  constructor() {
    this.health = { value: 10, importance: 1 };
    this.hunger = { value: 10, importance: 3 };
    this.energy = { value: 10, importance: 2 };
    this.fun = { value: 10, importance: 4 };
    console.log("Tamagotchi initialized");

    console.log(" health initial value:", this.health.value);
    console.log(" Energy initial value:", this.energy.value);
    console.log(" Hunger initial value:", this.hunger.value);
    console.log(" Fun initial value:", this.fun.value);

    this.healthDecrease = setInterval(() => {
      this.health.value -= 1;
      console.log(" Health decreased to", this.health.value);
      this.displayHealth(".healthPoints");
      if (this.health.value <= 0) {
        console.log("💀");
        clearInterval(this.healthDecrease);
      }
    }, 1000);

    this.hungerDecrease = setInterval(() => {
      this.hunger.value -= 1;
      console.log("\u001b[1;35m Hunger decreased to", this.hunger.value);
      this.displayHunger(".hungerPoints");
      if (this.hunger.value <= 0) {
        console.log("💀");
        clearInterval(this.hungerDecrease);
      }
    }, 1000);

    this.energyDecrease = setInterval(() => {
      this.energy.value -= 1;
      console.log("\u001b[1;36m Energy decreased to", this.energy.value);
      this.displayEnergy(".energyPoints");
      if (this.energy.value <= 0) {
        console.log("💀");
        clearInterval(this.energyDecrease);
      }
    }, 1000);

    this.funDecrease = setInterval(() => {
      this.fun.value -= 1;
      console.log("\u001b[1;34m Fun decreased to", this.fun.value);
      this.displayFun(".funPoints");
      if (this.fun.value <= 0) {
        console.log("💀");
        clearInterval(this.funDecrease);
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
    this.displayHealth(healthElement);
    this.displayHunger(hungerElement);
    this.displayEnergy(energyElement);
    this.displayFun(funElement);
  };
}
