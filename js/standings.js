class player {
  constructor(name, wins, losses, mapRecord) {
    this.name = name;
    this.wins = wins;
    this.losses = losses;
    this.mapRecord = mapRecord;
  }
}

const players = [
  new player("Nathan", 6, 2, "19-8"),
  new player("Sun_ssb", 7, 0, "20-6"),
  new player("GageBoss", 6, 1, "18-4"),
  new player("Scisco", 7, 0, "21-5"),
  new player("GuardianZangi", 6, 1, "20-6"),
  new player("RuntySloth", 4, 4, "16-14"),
  new player("ToxicKills", 0, 8, "0-24"),
  new player("Marow", 3, 4, "11-14"),
  new player("Dragontipper", 4, 4, "16-15"),
  new player("Jacob", 1, 6, "6-18"),
  new player("ducklenuts", 1, 6, "9-19"),
  new player("MrDarthMatt", 0, 7, "3-21"),
  new player("Irid", 3, 5, "14-19"),
];

function standings() {
  for (let i = 0; i < players.length; i++) {
    let highestWins = players[i].wins;
    let highestWinPercentageArr = players[i].mapRecord.split("-");
    let highestWinPercentage =
      parseInt(highestWinPercentageArr[0]) /
      (parseInt(highestWinPercentageArr[0]) +
        parseInt(highestWinPercentageArr[1]));
    let highestWinsIndex = i;
    let shouldSwap = false;

    for (let j = i + 1; j < players.length; j++) {
      let iteratedPlayerWinPerAr = players[j].mapRecord.split("-");
      let iteratedPlayerWinPer =
        parseInt(iteratedPlayerWinPerAr[0]) /
        (parseInt(iteratedPlayerWinPerAr[0]) +
          parseInt(iteratedPlayerWinPerAr[1]));

      if (players[j].wins > highestWins) {
        highestWins = players[j].wins;
        highestWinsIndex = j;
        shouldSwap = true;
        highestWinPercentage = iteratedPlayerWinPer;
      } else if (
        players[j].wins === highestWins &&
        iteratedPlayerWinPer > highestWinPercentage
      ) {
        highestWinPercentage = iteratedPlayerWinPer;
        highestWinsIndex = j;
        shouldSwap = true;
      }
    }
    if (shouldSwap) {
      let temp = players[i];
      players[i] = players[highestWinsIndex];
      players[highestWinsIndex] = temp;
    }
  }
  displayStandings(players);
}

function displayStandings(players) {
  let table = document.getElementById("standings-table");
  for (let i = 0; i < players.length; i++) {
    let row = table.insertRow(i);
    let placeCell = row.insertCell(0);
    let nameCell = row.insertCell(1);
    let winsCell = row.insertCell(2);
    let lossesCell = row.insertCell(3);
    let mapRecordCell = row.insertCell(4);
    placeCell.innerHTML = i + 1;
    nameCell.innerHTML = players[i].name;
    winsCell.innerHTML = players[i].wins;
    lossesCell.innerHTML = players[i].losses;
    mapRecordCell.innerHTML = players[i].mapRecord;
  }
}

/*
window.setInterval(function () {
  rotateImage();
}, 300);

function rotateImage() {
  let smashImg = document.getElementById("temp");
  let angle = parseInt(smashImg.attributes[1].value) + 20;

  smashImg.style.transform = "rotate(" + angle + "deg)";
  smashImg.attributes[1].value = angle.toString();

}*/
