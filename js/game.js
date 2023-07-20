import Tamagotchi from "./modules/tamagotchi.js";

export default class Game {
  constructor() {
    this.tamagotchi = new Tamagotchi();
  }

  updateParams(healthSpan, hungerSpan, energySpan, funSpan) {
    healthSpan.textContent = this.tamagotchi.health.value;
    hungerSpan.textContent = this.tamagotchi.hunger.value;
    energySpan.textContent = this.tamagotchi.energy.value;
    funSpan.textContent = this.tamagotchi.fun.value;
  }

  createIntervals(healthSpan, hungerSpan, energySpan, funSpan) {
    this.interval = setInterval(() => {
      this.tamagotchi.decreaseParams(this.tamagotchi.health, 1);
      this.tamagotchi.decreaseParams(this.tamagotchi.hunger, 1);
      this.tamagotchi.decreaseParams(this.tamagotchi.fun, 1);

      if (
        this.tamagotchi.hunger.value <= 0 ||
        this.tamagotchi.energy.value <= 0
      ) {
        this.tamagotchi.decreaseParams(this.tamagotchi.health, 1);
        this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);
      }

      this.updateParams(healthSpan, hungerSpan, energySpan, funSpan);
    }, 1000);

    this.energyInterval = setInterval(() => {
      this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);

      if (this.tamagotchi.fun.value <= 0) {
        this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);
      }

      this.updateParams(healthSpan, hungerSpan, energySpan, funSpan);
    }, 2000);
  }

  start() {
    const healthSpan = document.getElementById("health");
    const hungerSpan = document.getElementById("hunger");
    const energySpan = document.getElementById("energy");
    const funSpan = document.getElementById("fun");
    this.updateParams(healthSpan, hungerSpan, energySpan, funSpan);
    this.createIntervals(healthSpan, hungerSpan, energySpan, funSpan);
  }
}
