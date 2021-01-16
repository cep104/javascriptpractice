const winners = {
  bebeZaharaBenet: {
    name: "Bebe Zahara Benet",
    seasonWon: "S1",
    memorableQuotes: [
      "Mother, another day; another slay. Who's first?",
      "Rrrrra-ka-ta-ti-ti-ta-ta",
    ],
    wins: {
      maxiChallengeWins: 2,
      miniChallengeWins: 0,
      timesInTop: 1,
    },
    losses: {
      timesPlacedLow: 0,
      timesInBottom: 1,
    },
  },
  tyraSanchez: {
    name: "Tyra Sanchez",
    seasonWon: "S2",
    memorableQuotes: [
      "Mother, another day; another slay. Who's first?",
      "Rrrrra-ka-ta-ti-ti-ta-ta",
    ],
    wins: {
      maxiChallengeWins: 2,
      miniChallengeWins: 0,
      timesInTop: 1,
    },
    losses: {
      timesPlacedLow: 0,
      timesInBottom: 1,
    },
  },
  // tyraSanchez: {
  //   name: "Tyra Sanchez",
  //   seasonWon: "S2",
  //   maxiChallengeWins: 3,
  //   miniChallengeWins: 1,
  //   timesInTop: 4,
  //   timesPlacedLow: 1,
  //   timesInBottom: 0,
  // },
  // rajaGemini: {
  //   name: "Raja",
  //   seasonWon: "S3",
  //   maxiChallengeWins: 3,
  //   miniChallengeWins: 2,
  //   timesInTop: 4,
  //   timesPlacedLow: 1,
  //   timesInBottom: 1,
  // },
  // // sharonNeedles: {
  // //   name: "Sharon Needles",
  // // },
};

const youreAWinnerBaby = (winners) => {
  // console.log(winners);
  let finalScores = [];
  let winnerInfo = Object.values(winners);
  for (i = 0; i < winnerInfo.length; i++) {
    const queen = winnerInfo[i];
    let queenName = queen["name"];
    const bigLoss = queen["losses"]["timesInBottom"] * 2;
    const bigWin = queen["wins"]["maxiChallengeWins"] * 2;
    const smallWin =
      queen["wins"]["timesInTop"] + queen["wins"]["miniChallengeWins"];
    const smallLoss = queen["losses"]["timesPlacedLow"];
    const totalScore = bigWin + smallWin - (smallLoss + bigLoss);

    finalScores.push({ queenName, totalScore });
  }
};

youreAWinnerBaby(winners);

// console.log(winners["Raja"]["name"]);
// let a = 2;
// let answer = function (a) {
//   console.log(a);
//   let base = 3;
//   return [
//     function () {
//       return base + a;
//     },
//     function () {
//       return base;
//     },
//   ];
// };
// console.log(answer(a)[0]());
