export default class Abilities {
  constructor({ characterState, characterImage, hunger, health }) {
    this.isEating = false;
    this.isSleeping = false;
    this.isPlaying = false;
    this.characterState = characterState;
    this.characterImage = characterImage;
    this.hunger = hunger;
    this.health = health;
    this.eatingInterval = null;
    console.log("Abilities module initialized");

    const buttons = [
      { class: ".play", state: "PLAYING" },
      { class: ".eat", state: "EATING" },
      { class: ".sleep", state: "SLEEPING" },
    ];

    buttons.forEach(({ class: buttonClass, state }) => {
      const button = document.querySelector(buttonClass);
      if (button.classList.contains("eat")) {
        button.addEventListener("click", this.toggleEating);
      } else if (button.classList.contains("sleep")) {
        button.addEventListener("click", this.startSleeping);
      } else if (button.classList.contains("play")) {
        button.addEventListener("click", this.startPlaying);
      }
    });
  }

  startEating = () => {
    this.eatingInterval = setInterval(() => {
      this.hunger.value += 2;
      this.displayHunger(this.hunger.element);
      if (this.health.value <= 0) {
        clearInterval(this.eatingInterval);
        this.isEating = false;
      }
      if (!this.isEating) {
        clearInterval(this.eatingInterval);
      }
    }, 1000);
  };

  stopEating = () => {
    clearInterval(this.eatingInterval);
    this.isEating = false;
  };

  toggleEating = () => {
    this.isEating = !this.isEating;
    if (this.isEating) {
      this.startEating();
      console.log("start eating");
      this.characterState.innerText = "EATING";
      this.characterImage.src = "./img/NimoMoods/State=Eating1.png";
    } else {
      this.stopEating();
      console.log("stop eating");
      this.characterImage.src = "./img/NimoMoods/State=Standing.png";
    }
  };
}
