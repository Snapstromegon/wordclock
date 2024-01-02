/*
Autor: Raphael Hoeser
Datum: 11.07.2017
Version: 1.1

WordClock LanguagePack DE

*/

wc_addLanguagePack({
  langCode: 'DE',
  letterSet: [
    ['E', 'S', 'M', 'I', 'S', 'T', 'E', 'F', 'Ü', 'N', 'F'],
    ['Z', 'E', 'H', 'N', 'Z', 'W', 'A', 'N', 'Z', 'I', 'G'],
    ['V', 'I', 'E', 'R', 'T', 'E', 'L', 'N', 'V', 'O', 'R'],
    ['N', 'A', 'C', 'H', 'V', 'X', 'R', 'H', 'A', 'L', 'B'],
    ['E', 'I', 'N', 'S', 'I', 'N', 'K', 'Z', 'W', 'E', 'I'],
    ['D', 'R', 'E', 'I', 'E', 'A', 'N', 'V', 'I', 'E', 'R'],
    ['F', 'Ü', 'N', 'F', 'N', 'I', 'S', 'E', 'C', 'H', 'S'],
    ['S', 'I', 'E', 'B', 'E', 'N', 'I', 'A', 'C', 'H', 'T'],
    ['N', 'E', 'U', 'N', 'Z', 'E', 'H', 'N', 'E', 'L', 'F'],
    ['Z', 'W', 'Ö', 'L', 'F', 'K', 'A', 'B', 'U', 'H', 'R']
  ],
  timeString: function(h, m, settings = { round: false }) {
    var ret = 'ES IST ';

    if(settings.round && m>57) {
      h+=1;
    }
    h %= 12;
    if (h == 0) h = 12;
    var hourNames = [
      'EINS',
      'ZWEI',
      'DREI',
      'VIER',
      'FÜNF',
      'SECHS',
      'SIEBEN',
      'ACHT',
      'NEUN',
      'ZEHN',
      'ELF',
      'ZWÖLF'
    ];
    switch (
      (settings.round ? Math.round(m / 5) * 5 : Math.floor(m / 5) * 5) % 60
    ) {
      case 0:
        ret += (h == 1 ? 'EIN' : hourNames[h - 1]) + ' UHR';
        break;
      case 5:
        ret += 'FÜNF NACH ' + hourNames[h - 1];
        break;
      case 10:
        ret += 'ZEHN NACH ' + hourNames[h - 1];
        break;
      case 15:
        ret += 'VIERTEL NACH ' + hourNames[h - 1];
        break;
      case 20:
        ret += 'ZWANZIG NACH ' + hourNames[h - 1];
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
        ret += 'ZWANZIG VOR ' + hourNames[h % 12];
        break;
      case 45:
        ret += 'VIERTEL VOR ' + hourNames[h % 12];
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
