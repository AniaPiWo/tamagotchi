import Game from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();

  // Start game
  game.start({
    healthElement: ".healthPoints",
    hungerElement: ".hungerPoints",
    energyElement: ".energyPoints",
    funElement: ".funPoints",
  });
});
