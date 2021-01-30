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
  biancaDelRio: {
    name: "Bianca Del Rio",
    seasonWon: "S6",
    memorableQuotes: ["Not today Satan! Not today!", "I'm clown realness!"],
    wins: {
      maxiChallengeWins: 3,
      miniChallengeWins: 1,
      timesInTop: 5,
    },
    losses: {
      timesPlacedLow: 0,
      timesInBottom: 0,
    },
  },
  violetChachki: {
    name: "Violet Chachki",
    seasonWon: "S7",
    memorableQuotes: [
      "Ooh la la la la-la-la-la la.",
      "I am a one-of-a-kind collectible.",
    ],
    wins: {
      maxiChallengeWins: 3,
      miniChallengeWins: 1,
      timesInTop: 2,
    },
    losses: {
      timesPlacedLow: 2,
      timesInBottom: 0,
    },
  },
  bobTheDragQueen: {
    name: "Bob the Drag Queen",
    seasonWon: "S8",
    memorableQuotes: [
      "Purse first! Purse first! Walk into the room purse first! Clack!",
      "If my intentions were to hurt you, you'd be crying right now, bitch! (to Derrick Barry)",
    ],
    wins: {
      maxiChallengeWins: 3,
      miniChallengeWins: 1,
      timesInTop: 0,
    },
    losses: {
      timesPlacedLow: 0,
      timesInBottom: 1,
    },
  },

  sashaVelour: {
    name: "Sasha Velour",
    seasonWon: "S9",
    memorableQuotes: ["Don't joke about that.", "AAAAAAAAH! *cough* HUUH."],
    wins: {
      maxiChallengeWins: 2,
      miniChallengeWins: 1,
      timesInTop: 5,
    },
    losses: {
      timesPlacedLow: 1,
      timesInBottom: 0,
    },
  },
  yvieOddly: {
    name: "Yvie Oddly",
    seasonWon: "S11",
    memorableQuotes: [
      "HUEHUEHUEHUE.",
      "I am Denver's commodity of drag oddity.",
    ],
    wins: {
      maxiChallengeWins: 1,
      miniChallengeWins: 0,
      timesInTop: 6,
    },
    losses: {
      timesPlacedLow: 1,
      timesInBottom: 1,
    },
  },
  jaidaEssenceHall: {
    name: "Jaida Essence Hall",
    seasonWon: "S12",
    memorableQuotes: [
      "Hey, bitches! She's here!",
      "I am Denver's commodity of drag oddity.",
    ],
    wins: {
      maxiChallengeWins: 3,
      miniChallengeWins: 0,
      timesInTop: 3,
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
  const h1 = document.querySelector("h1");
  const topQueen = finalScores.sort((a, b) =>
    a.totalScore > b.totalScore ? -1 : 1
  );
  console.log(topQueen);

  h1.innerHTML = `${topQueen[0].queenName} is the winner!`;
};

youreAWinnerBaby(winners);
