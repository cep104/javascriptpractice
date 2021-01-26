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
    memorableQuotes: ["Then why are you talking?", "Beyoncé is just like me."],
    wins: {
      maxiChallengeWins: 3,
      miniChallengeWins: 0,
      timesInTop: 4,
    },
    losses: {
      timesPlacedLow: 1,
      timesInBottom: 0,
    },
  },
  rajaGemini: {
    name: "Raja",
    seasonWon: "S3",
    memorableQuotes: ["I have a master's degree in FIERCE.", "Smizing."],
    wins: {
      maxiChallengeWins: 3,
      miniChallengeWins: 2,
      timesInTop: 4,
    },
    losses: {
      timesPlacedLow: 1,
      timesInBottom: 1,
    },
  },
  sharonNeedles: {
    name: "Sharon Needles",
    seasonWon: "S4",
    memorableQuotes: ["Tired ass showgirl.", "When in doubt, freak 'em out.."],
    wins: {
      maxiChallengeWins: 4,
      miniChallengeWins: 0,
      timesInTop: 3,
    },
    losses: {
      timesPlacedLow: 1,
      timesInBottom: 1,
    },
  },
  jinkxMonsoon: {
    name: "Jinkx Monsoon",
    seasonWon: "S5",
    memorableQuotes: [
      "Water off a duck's back.",
      "Delusion - convince yourself!",
    ],
    wins: {
      maxiChallengeWins: 2,
      miniChallengeWins: 1,
      timesInTop: 7,
    },
    losses: {
      timesPlacedLow: 0,
      timesInBottom: 1,
    },
  },
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
  console.log(finalScores);
};

youreAWinnerBaby(winners);
