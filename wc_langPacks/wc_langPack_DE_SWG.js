/*
Autor: Joerg Noebels
Datum: 27.03.2019
Version: 1.0

WordClock LanguagePack DE Schwäbisch / Swabian

*/

wc_addLanguagePack({
  langCode: 'DE_SWG',
  letterSet: [
    ['E', 'S', 'K', 'I', 'S', 'C', 'H', 'F', 'U', 'N', 'K'],
    ['D', 'R', 'E', 'I', 'V', 'I', 'E', 'R', 'T', 'L', 'A'],
    ['Z', 'E', 'H', 'N', 'B', 'I', 'E', 'F', 'Ü', 'N', 'F'],
    ['N', 'A', 'C', 'H', 'G', 'E', 'R', 'T', 'V', 'O', 'R'],
    ['H', 'A', 'L', 'B', 'X', 'F', 'Ü', 'N', 'F', 'E', 'I'],
    ['O', 'I', 'S', 'E', 'C', 'H', 'S', 'E', 'L', 'F', 'E'],
    ['Z', 'W', 'O', 'I', 'E', 'A', 'C', 'H', 'T', 'E', 'D'],
    ['D', 'R', 'E', 'I', 'E', 'Z', 'W', 'Ö', 'L', 'F', 'E'],
    ['Z', 'E', 'H', 'N', 'E', 'U', 'N', 'E', 'U', 'H', 'L'],
    ['S', 'I', 'E', 'B', 'N', 'E', 'V', 'I', 'E', 'R', 'E']
  ],
  timeString: function(h, m, settings = { round: false }) {
    var ret = 'ES ISCH ';
    h %= 12;
    if (h == 0) h = 12;
    var hourNames = [
      'OISE',
      'ZWOIE',
      'DREIE',
      'VIERE',
      'FÜNFE',
      'SECHSE',
      'SIEBNE',
      'ACHTE',
      'NEUNE',
      'ZEHNE',
      'ELFE',
      'ZWÖLFE'
    ];
    switch (
      (settings.round ? Math.round(m / 5) * 5 : Math.floor(m / 5) * 5) % 60
    ) {
      case 0:
        ret += hourNames[h - 1];
        break;
      case 5:
        ret += 'FÜNF NACH ' + hourNames[h - 1];
        break;
      case 10:
        ret += 'ZEHN NACH ' + hourNames[h - 1];
        break;
      case 15:
        ret += 'VIERTL ' + hourNames[h % 12];
        break;
      case 20:
        ret += 'ZEHN VOR HALB ' + hourNames[h % 12];
        break;
      case 25:
        ret += 'FÜNF VOR HALB ' + hourNames[h % 12];
        break;
      case 30:
        ret += 'HALB ' + hourNames[h % 12];
        break;
      case 35:
        ret += 'FÜNF NACH HALB ' + hourNames[h % 12];
        break;
      case 40:
        ret += 'ZEHN NACH HALB ' + hourNames[h % 12];
        break;
      case 45:
        ret += 'DREIVIERTL ' + hourNames[h % 12];
        break;
      case 50:
        ret += 'ZEHN VOR ' + hourNames[h % 12];
        break;
      case 55:
        ret += 'FÜNF VOR ' + hourNames[h % 12];
        break;
    }
    return ret;
  }
});
