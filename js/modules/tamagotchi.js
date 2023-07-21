export default class Tamagotchi {
  constructor() {
    this.health = { name: "health", value: 10, importance: 1 };
    this.hunger = { name: "hunger", value: 10, importance: 3 };
    this.energy = { name: "energy", value: 10, importance: 2 };
    this.fun = { name: "fun", value: 10, importance: 4 };
    this.mood = { value: "HAPPY" };
    this.imgSrc = { value: "./img/Nimo.png" };
  }
  decreaseParams(param, amount) {
    param.value -= amount;
    if (param.value <= 0) param.value = 0;
    /* console.log(`${param.name}: `, param.value); */
  }

  increaseParams(param, amount) {
    param.value += amount;
    /*console.log(`${param.name}: `, param.value); */
  }
}
