export default class Abilities {
  constructor({ characterState }) {
    console.log("Abilities module initialized");

    const buttons = [
      { class: ".play", state: "PLAYING" },
      { class: ".eat", state: "EATING" },
      { class: ".sleep", state: "SLEEPING" },
    ];

    buttons.forEach(({ class: buttonClass, state }) => {
      const button = document.querySelector(buttonClass);
      button.addEventListener("mousedown", () => {
        characterState.innerText = state;
      });
    });
  }
}
