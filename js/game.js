import Tamagotchi from "./modules/tamagotchi.js";
import Abilities from "./modules/abilities.js";

export default class Game {
  constructor() {
    this.tamagotchi = new Tamagotchi({
      characterState: document.querySelector(".screen__characterState"),
      characterImage: document.querySelector(".screen__character img"),
    });
    this.abilities = new Abilities(this.tamagotchi);
  }

  start = ({ healthElement, hungerElement, energyElement, funElement }) => {
    this.tamagotchi.mount({
      healthElement,
      hungerElement,
      energyElement,
      funElement,
    });
    console.log("Game started");
  };
}
