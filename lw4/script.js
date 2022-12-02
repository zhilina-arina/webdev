const url = "https://www.balldontlie.io/api/v1/players";

fetch(url, { method: "GET" })
  .then((value) => value.json())
  .then((value) => {
    showPlayers(value.data);
  });

function showPlayers(data) {
  const playersEl = document.querySelector(".players");
  console.log(data);
  data.forEach((player) => {
    const playerEl = document.createElement("div");
    playerEl.classList.add("player");
    playerEl.innerHTML = `
          <div class="player-name">
            ${player.first_name} ${player.last_name}
          </div>
          <div class="player-info">
            Position: ${player.position}<br>
            Team: ${player.team.full_name}
          </div>`;
    playersEl.appendChild(playerEl);
  });
}