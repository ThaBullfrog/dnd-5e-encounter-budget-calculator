const EncounterData = {
  difficulties: ['easy', 'medium', 'hard', 'deadly'],
  thresholds: [
    { easy:   25, medium:   50, hard:   75, deadly:   100 },
    { easy:   50, medium:  100, hard:  150, deadly:   200 },
    { easy:   75, medium:  150, hard:  225, deadly:   400 },
    { easy:  125, medium:  250, hard:  375, deadly:   500 },
    { easy:  250, medium:  500, hard:  750, deadly:  1100 },
    { easy:  300, medium:  600, hard:  900, deadly:  1400 },
    { easy:  350, medium:  750, hard: 1100, deadly:  1700 },
    { easy:  450, medium:  900, hard: 1400, deadly:  2100 },
    { easy:  550, medium: 1100, hard: 1600, deadly:  2400 },
    { easy:  600, medium: 1200, hard: 1900, deadly:  2800 },
    { easy:  800, medium: 1600, hard: 2400, deadly:  3600 },
    { easy: 1000, medium: 2000, hard: 3000, deadly:  4500 },
    { easy: 1100, medium: 2200, hard: 3400, deadly:  5100 },
    { easy: 1250, medium: 2500, hard: 3800, deadly:  5700 },
    { easy: 1400, medium: 2800, hard: 4300, deadly:  6400 },
    { easy: 1600, medium: 3200, hard: 4800, deadly:  7200 },
    { easy: 2000, medium: 3900, hard: 5900, deadly:  8800 },
    { easy: 2100, medium: 4200, hard: 6300, deadly:  9500 },
    { easy: 2400, medium: 4900, hard: 7300, deadly: 10900 },
    { easy: 2800, medium: 5700, hard: 8500, deadly: 12700 }
  ],
  multiplier: numberOfMonsters => {
    if (numberOfMonsters <= 1) {
      return 1;
    } else if (numberOfMonsters == 2) {
      return 1.5;
    } else if (numberOfMonsters >= 3 && numberOfMonsters <= 6) {
      return 2;
    } else if (numberOfMonsters >= 7 && numberOfMonsters <= 10) {
      return 2.5;
    } else if (numberOfMonsters >= 11 && numberOfMonsters <= 14) {
      return 3;
    } else if (numberOfMonsters >= 15) {
      return 4;
    }
  }
}

export default EncounterData;