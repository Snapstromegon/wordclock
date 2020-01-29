/*
Autor: Carl van Oene
Datum: 29.09.2019
Version: 1.0

WordClock LanguagePack NL

*/

wc_addLanguagePack({
  langCode: 'NL',
  letterSet: [
    ['H', 'E', 'T', 'K', 'I', 'S', 'A', 'V', 'I', 'J', 'F'],
    ['T', 'I', 'E', 'N', 'A', 'T', 'Z', 'V', 'O', 'O', 'R'],
    ['O', 'V', 'E', 'R', 'M', 'E', 'K', 'W', 'A', 'R', 'T'],
    ['H', 'A', 'L', 'F', 'S', 'P', 'M', 'O', 'V', 'E', 'R'],
    ['V', 'O', 'O', 'R', 'T', 'H', 'G', 'E', 'E', 'N', 'S'],
    ['T', 'W', 'E', 'E', 'A', 'M', 'C', 'D', 'R', 'I', 'E'],
    ['V', 'I', 'E', 'R', 'V', 'I', 'J', 'F', 'Z', 'E', 'S'],
    ['Z', 'E', 'V', 'E', 'N', 'O', 'N', 'E', 'G', 'E', 'N'],
    ['A', 'C', 'H', 'T', 'T', 'I', 'E', 'N', 'E', 'L', 'F'],
    ['T', 'W', 'A', 'A', 'L', 'F', 'P', 'M', 'U', 'U', 'R']
  ],
  timeString: function(h, m, settings = { round: false }) {
    var ret = 'HET IS ';
    h %= 12;
    if (h == 0) h = 12;
    var hourNames = [
      'EEN',
      'TWEE',
      'DRIE',
      'VIER',
      'VIJF',
      'ZES',
      'ZEVEN',
      'ACHT',
      'NEGEN',
      'TIEN',
      'ELF',
      'TWAALF'
    ];
    switch (
      (settings.round ? Math.round(m / 5) * 5 : Math.floor(m / 5) * 5) % 60
    ) {
      case 0:
        ret += (h == 1 ? 'EEN' : hourNames[h - 1]) + ' UUR';
        break;
      case 5:
        ret += 'VIJF OVER ' + hourNames[h - 1];
        break;
      case 10:
        ret += 'TIEN OVER ' + hourNames[h - 1];
        break;
      case 15:
        ret += 'KWART OVER ' + hourNames[h - 1];
        break;
      case 20:
        ret += 'TIEN VOOR HALF ' + hourNames[h - 1];
        break;
      case 25:
        ret += 'VIJF VOOR HALF ' + hourNames[h % 12];
        break;
      case 30:
        ret += 'HALF ' + hourNames[h % 12];
        break;
      case 35:
        ret += 'VIJF OVER HALF ' + hourNames[h % 12];
        break;
      case 40:
        ret += 'TIEN OVER HALF ' + hourNames[h % 12];
        break;
      case 45:
        ret += 'KWART OVER ' + hourNames[h % 12];
        break;
      case 50:
        ret += 'TIEN VOOR ' + hourNames[h % 12];
        break;
      case 55:
        ret += 'VIJF VOOR ' + hourNames[h % 12];
        break;
    }
    return ret;
  }
});
