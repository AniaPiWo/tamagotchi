export default class Abilities {
  constructor(tamagotchi) {
    this.tamagotchi = tamagotchi;
    console.log("Abilities module initialized");

    const buttons = [
      { class: ".play", state: "PLAYING" },
      { class: ".eat", state: "EATING" },
      { class: ".sleep", state: "SLEEPING" },
    ];
    buttons.forEach(({ class: buttonClass }) => {
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

  startPlaying = () => {
    console.log("Tamagoczi:", this.tamagot);
  };
}
