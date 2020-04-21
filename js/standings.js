class player {
  constructor(name, wins, losses, mapRecord) {
    this.name = name;
    this.wins = wins;
    this.losses = losses;
    this.mapRecord = mapRecord;
  }
}

const players = [
  new player("Nathan", 2, 2, "7-6"),
  new player("Sun_ssb", 3, 0, "9-5"),
  new player("GageBoss", 3, 0, "9-1"),
  new player("Scisco", 4, 0, "12-3"),
  new player("GuardianZangi", 3, 1, "11-5"),
  new player("RuntySloth", 2, 2, "9-7"),
  new player("ToxicKills", 0, 4, "0-12"),
  new player("Marow", 2, 2, "8-7"),
  new player("Dragontipper", 3, 1, "10-6"),
  new player("Jacob", 0, 3, "1-9"),
  new player("ducklenuts", 0, 4, "4-12"),
  new player("MrDarthMatt", 0, 3, "2-9"),
  new player("Irid", 2, 2, "9-8"),
];

function standings() {
  console.log(players);
  for (let i = 0; i < players.length; i++) {
    let highestWins = players[i].wins;
    let highestWinPercentageArr = players[i].mapRecord.split("-");
    let highestWinPercentage =
      highestWinPercentageArr[0] /
      (highestWinPercentageArr[0] + highestWinPercentageArr[1]);
    let highestWinsIndex = i;
    let shouldSwap = false;
    for (let j = i; j < players.length; j++) {
      if (players[j].wins > highestWins) {
        highestWins = players[j].wins;
        highestWinsIndex = j;
        shouldSwap = true;
      } else if (players[j].wins === highestWins) {
        let iteratedPlayerWinPerAr = players[j].mapRecord.split("-");
        let iteratedPlayerWinPer =
          iteratedPlayerWinPerAr[0] /
          (iteratedPlayerWinPerAr[0] + iteratedPlayerWinPerAr[1]);
        if (iteratedPlayerWinPer > highestWinPercentage) {
          highestWinPercentage = iteratedPlayerWinPer;
          highestWinsIndex = j;
          shouldSwap = true;
        }
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

window.setInterval(function () {
  rotateImage();
}, 300);

function rotateImage() {
  let smashImg = document.getElementById("temp");
  let angle = parseInt(smashImg.attributes[1].value) + 20;
  /*
  if (angle > 370) {
    angle = -10;
  }*/
  smashImg.style.transform = "rotate(" + angle + "deg)";
  smashImg.attributes[1].value = angle.toString();
  /*
  if (angle === 0) {
    smashImg.style.transform = "rotate(180deg)";
  }*/
}
