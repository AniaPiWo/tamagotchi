import Tamagotchi from "./modules/tamagotchi.js";

export default class Game {
  constructor() {
    this.tamagotchi = new Tamagotchi();
    this.healthSpan = document.getElementById("health");
    this.hungerSpan = document.getElementById("hunger");
    this.energySpan = document.getElementById("energy");
    this.funSpan = document.getElementById("fun");
    this.moodSpan = document.getElementById("mood");
    this.imgDiv = document.getElementById("image");
    this.eatBtn = document.getElementById("eat");
    this.sleepBtn = document.getElementById("sleep");
    this.playBtn = document.getElementById("play");
    this.actionInterval = null;
  }

  changeMood() {
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
  }

  updateParams() {
    this.healthSpan.textContent = this.tamagotchi.health.value;
    this.hungerSpan.textContent = this.tamagotchi.hunger.value;
    this.energySpan.textContent = this.tamagotchi.energy.value;
    this.funSpan.textContent = this.tamagotchi.fun.value;
    this.moodSpan.textContent = this.tamagotchi.mood.value;
    this.imgDiv.src = this.tamagotchi.imgSrc.value;
  }

  createIntervals() {
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
        !["EATING", "SLEEPING", "PLAYING"].includes(this.tamagotchi.mood.value)
      ) {
        this.changeMood();
      }
      this.updateParams();
    }, 1000);

    this.energyInterval = setInterval(() => {
      this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);

      if (this.tamagotchi.fun.value <= 0) {
        this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);
      }
      if (this.tamagotchi.health.value <= 0) {
        clearInterval(this.interval);
      }
      if (
        !["EATING", "SLEEPING", "PLAYING"].includes(this.tamagotchi.mood.value)
      ) {
        this.changeMood();
      }
      this.updateParams();
    }, 2000);
  }

  action(param, actionName, imgSrc, intervalTime, increaseAmount) {
    if (this.actionInterval) {
      clearInterval(this.actionInterval);
      this.actionInterval = null;
    }

    if (this.tamagotchi.mood.value === actionName) {
      this.stopAction();
    } else {
      this.actionInterval = setInterval(() => {
        this.tamagotchi.increaseParams(param, increaseAmount);
        this.tamagotchi.mood.value = actionName;
        this.tamagotchi.imgSrc.value = imgSrc;
        this.updateParams();
      }, intervalTime);
    }
  }
  stopAction() {
    this.tamagotchi.mood.value = "HAPPY";
    this.tamagotchi.imgSrc.value = "./img/Nimo.png";
    clearInterval(this.actionInterval);
    this.changeMood();
    this.updateParams();
  }

  start() {
    this.eatBtn.addEventListener("click", () => {
      this.action(
        this.tamagotchi.hunger,
        "EATING",
        "./img/actions/eating.gif",
        1000,
        2
      );
    });

    this.sleepBtn.addEventListener("click", () => {
      this.action(
        this.tamagotchi.energy,
        "SLEEPING",
        "./img/actions/sleeping.gif",
        1000,
        2
      );
    });

    this.playBtn.addEventListener("click", () => {
      this.action(
        this.tamagotchi.fun,
        "PLAYING",
        "./img/actions/playing.gif",
        1000,
        2
      );
      this.tamagotchi.decreaseParams(this.tamagotchi.energy, 1);
      this.updateParams();
    });

    this.updateParams();
    this.createIntervals();
  }
}
