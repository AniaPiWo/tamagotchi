export default class Tamagotchi {
  constructor() {
    this.health = { value: 10, importance: 1 };
    this.hunger = { value: 10, importance: 3 };
    this.energy = { value: 10, importance: 2 };
    this.fun = { value: 10, importance: 4 };
    console.log("Tamagotchi initialized");
  }

  displayElement = (elementSelector, property) => {
    const displayElement = document.querySelector(elementSelector);
    displayElement.innerText = this[property].value;
  };

  mount = ({ healthElement, hungerElement, energyElement, funElement }) => {
    this.displayElement(healthElement, "health");
    this.displayElement(hungerElement, "hunger");
    this.displayElement(energyElement, "energy");
    this.displayElement(funElement, "fun");
  };
}
