
export function play(players) {

  let current = 0;
  let currentPlayers = [ ...players ]
  while (currentPlayers.length > 1) {
    const player = currentPlayers[current];
    player.turn(currentPlayers);
    currentPlayers = currentPlayers.filter(player => !player.isDead());
    if (player === currentPlayers[current]) {
      current++;
    }
    if (current === currentPlayers.length) {
      current = 0;
    }
  }

  return currentPlayers[0];
}

