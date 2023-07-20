import Tamagotchi from "./modules/tamagotchi.js";

export default class Game {
  constructor() {
    this.tamagotchi = new Tamagotchi();
  }

  updateParams(healthSpan, hungerSpan, energySpan, funSpan, moodSpan, imgDiv) {
    healthSpan.textContent = this.tamagotchi.health.value;
    hungerSpan.textContent = this.tamagotchi.hunger.value;
    energySpan.textContent = this.tamagotchi.energy.value;
    funSpan.textContent = this.tamagotchi.fun.value;
    moodSpan.textContent = this.tamagotchi.mood.value;
    imgDiv.src = this.tamagotchi.imgSrc.value;
  }

  createIntervals(
    healthSpan,
    hungerSpan,
    energySpan,
    funSpan,
    moodSpan,
    imgDiv
  ) {
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
      if (this.tamagotchi.health.value <= 0) {
        clearInterval(this.interval);
      }
      if (
        this.tamagotchi.hunger.value >= 7 &&
        this.tamagotchi.energy.value >= 7 &&
        this.tamagotchi.health.value >= 7 &&
        this.tamagotchi.fun.value >= 7
      ) {
        this.tamagotchi.mood.value = "HAPPY";
        this.tamagotchi.imgSrc.value = "./img/Nimo.png";
      } else if (this.tamagotchi.energy.value <= 6) {
        this.tamagotchi.mood.value = "SLEEPY";
        this.tamagotchi.imgSrc.value = "./img/NimoMoods/State=Sleepy.png";
      } else if (this.tamagotchi.hunger.value <= 6) {
        this.tamagotchi.mood.value = "HUNGRY";
        this.tamagotchi.imgSrc.value = "./img/NimoMoods/State=Hungry.png";
      } else if (this.tamagotchi.fun.value <= 6) {
        this.tamagotchi.mood.value = "SAD";
        this.tamagotchi.imgSrc.value = "./img/NimoMoods/State=Bored.png";
      }
      this.updateParams(
        healthSpan,
        hungerSpan,
        energySpan,
        funSpan,
        moodSpan,
        imgDiv
      );
    }, 1000);

    this.energyInterval = setInterval(() => {
      this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);

      if (this.tamagotchi.fun.value <= 0) {
        this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);
      }
      if (this.tamagotchi.health.value <= 0) {
        clearInterval(this.interval);
      }
      this.updateParams(
        healthSpan,
        hungerSpan,
        energySpan,
        funSpan,
        moodSpan,
        imgDiv
      );
    }, 2000);
  }

  start() {
    const healthSpan = document.getElementById("health");
    const hungerSpan = document.getElementById("hunger");
    const energySpan = document.getElementById("energy");
    const funSpan = document.getElementById("fun");
    const moodSpan = document.getElementById("mood");
    const imgDiv = document.getElementById("image");
    const eatBtn = document.getElementById("eat");

    eatBtn.addEventListener("click", () => {
      this.eat();
    });

    this.updateParams(
      healthSpan,
      hungerSpan,
      energySpan,
      funSpan,
      moodSpan,
      imgDiv
    );
    this.createIntervals(
      healthSpan,
      hungerSpan,
      energySpan,
      funSpan,
      moodSpan,
      imgDiv
    );
  }
}
