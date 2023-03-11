export default class Tamagotchi {
  constructor({ characterState, characterImage, hunger, health }) {
    this.health = health = { value: 10, importance: 1, element: null };
    this.hunger = hunger = { value: 10, importance: 3, element: null };
    this.energy = { value: 10, importance: 2, element: null };
    this.fun = { value: 10, importance: 4, element: null };
    this.characterState = characterState;
    this.characterImage = characterImage;

    console.log("Tamagotchi initialized");

    this.healthDecrease = setInterval(() => {
      if (this.hunger.value <= 0 || this.energy.value <= 0) {
        this.health.value -= 1;
        this.displayHealth(this.health.element);
        if (this.health.value <= 0) {
          clearInterval(this.healthDecrease);
        }
      }
      this.updateState();
    }, 1000);

    this.hungerDecrease = setInterval(() => {
      this.hunger.value -= 1;
      this.displayHunger(this.hunger.element);
      if (this.hunger.value <= 0) {
        clearInterval(this.hungerDecrease);
      }
      this.updateState();
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
        clearInterval(this.energyDecrease);
      }
      this.updateState();
    }, 2000);

    this.funDecrease = setInterval(() => {
      this.fun.value -= 1;
      this.displayFun(this.fun.element);
      if (this.fun.value <= 0) {
        clearInterval(this.funDecrease);
      }
      this.updateState();
    }, 1000);
  }

  updateState = () => {
    let state = "";
    let imgPath = "";
    if (this.health.value <= 0) {
      state = "DEAD";
      imgPath = "./img/NimoMoods/State=Dead.png";
      clearInterval(this.healthDecrease);
    } else if (this.energy.value <= 6) {
      state = "TIRED";
      imgPath = "./img/NimoMoods/State=Sleepy.png";
    } else if (this.hunger.value <= 6) {
      state = "HUNGRY";
      imgPath = "./img/NimoMoods/State=Hungry.png";
    } else if (this.fun.value <= 6) {
      state = "BORED";
      imgPath = "./img/NimoMoods/State=Bored.png";
    } else {
      state = "HAPPY";
      imgPath = "./img/NimoMoods/State=Standing.png";
    }

    if (state !== this.currentState) {
      console.log(state);
      if (this.characterState) {
        this.characterState.innerText = state;
      }

      if (this.characterImage) {
        this.characterImage.src = imgPath;
      }

      this.currentState = state;
    }

    this.displayHealth(this.health.element);
    this.displayHunger(this.hunger.element);
    this.displayEnergy(this.energy.element);
    this.displayFun(this.fun.element);
  };

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
