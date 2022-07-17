/*
Autor: Carl van Oene
Datum: 29.09.2019
Version: 1.0

WordClock LanguagePack NL

*/

wc_addLanguagePack({
  langCode: 'NL-min',
  letterSet: 
[
    ['H', 'E', 'T', 'K', 'I', 'S', 'A', 'E', 'E', 'N', 'V', 'I', 'J', 'F'],
    ['T', 'W', 'E', 'E', 'Z', 'E', 'V', 'E', 'N', 'N', 'E', 'G', 'E', 'N'],
    ['Z', 'E', 'S', 'V', 'I', 'E', 'R', 'T', 'W', 'A', 'A', 'L', 'F', 'P'],
    ['E', 'L', 'F', 'D', 'E', 'R', 'T', 'I', 'E', 'N', 'A', 'C', 'H', 'T'],
    ['D', 'R', 'I', 'E', 'V', 'E', 'E', 'R', 'T', 'I', 'E', 'N', 'E', 'N'],
    ['K', 'W', 'A', 'R', 'T', 'E', 'T', 'W', 'I', 'N', 'T', 'I', 'G', 'E'],
    ['Z', 'O', 'V', 'E', 'R', 'V', 'O', 'O', 'R', 'U', 'H', 'A', 'L', 'F'],
    ['T', 'W', 'E', 'E', 'V', 'Z', 'E', 'S', 'E', 'N', 'E', 'G', 'E', 'N'],
    ['E', 'L', 'F', 'E', 'E', 'N', 'S', 'V', 'I', 'E', 'R', 'B', 'O', 'K'],
    ['Z', 'E', 'V', 'E', 'N', 'T', 'I', 'E', 'N', 'S', 'V', 'I', 'J', 'F'],
    ['K', 'D', 'R', 'I', 'E', 'O', 'V', 'E', 'R', 'R', 'A', 'C', 'H', 'T'],
    ['N', 'A', 'G', 'H', 'A', 'L', 'F', 'I', 'Z', 'U', 'U', 'R', 'F', 'L'],
    ['B', 'V', 'O', 'O', 'R', 'F', 'L', 'N', 'A', 'S', 'M', 'N', 'D', 'E'],
    ['O', 'P', 'X', 'Z', 'M', 'I', 'D', 'D', 'A', 'G', '?', 'V', 'C', 'H'],
],
  timeString: function(h, m, settings = { round: false }) {
    var ret = 'HET IS ';
    var h24 = h;
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
      (settings.round ? Math.round(m / 1) * 1 : Math.floor(m / 1) * 1) % 60
    ) {
      case 0:
        ret += (h == 1 ? 'EEN' : hourNames[h - 1]) + ' UUR';
        break;
      case 1:
        ret += 'EEN OVER ' + hourNames[h - 1];
        break;
      case 2:
        ret += 'TWEE OVER ' + hourNames[h - 1];
        break;
      case 3:
        ret += 'DRIE OVER ' + hourNames[h - 1];
        break;
      case 4:
        ret += 'VIER OVER ' + hourNames[h - 1];
        break;
      case 5:
        ret += 'VIJF OVER ' + hourNames[h - 1];
        break;
      case 6:
        ret += 'ZES OVER ' + hourNames[h - 1];
        break;
      case 7:
        ret += 'ZEVEN OVER ' + hourNames[h - 1];
        break;
      case 8:
        ret += 'ACHT OVER ' + hourNames[h - 1];
        break;
      case 9:
        ret += 'NEGEN OVER ' + hourNames[h - 1];
        break;
      case 10:
        ret += 'TIEN OVER ' + hourNames[h - 1];
        break;
      case 11:
        ret += 'ELF OVER ' + hourNames[h - 1];
        break;
      case 12:
        ret += 'TWAALF OVER ' + hourNames[h - 1];
        break;
      case 13:
        ret += 'DERTIEN OVER ' + hourNames[h - 1];
        break;
      case 14:
        ret += 'VEERTIEN OVER ' + hourNames[h - 1];
        break;
      case 15:
        ret += 'KWART OVER ' + hourNames[h - 1];
        break;
      case 16:
        ret += 'VEERTIEN VOOR HALF ' + hourNames[h == 12 ? 0 : h];
        break;
      case 17:
        ret += 'DERTIEN VOOR HALF ' + hourNames[h == 12 ? 0 : h];
        break;
      case 18:
        ret += 'TWAALF VOOR HALF ' + hourNames[h == 12 ? 0 : h];
        break;
      case 19:
        ret += 'ELF VOOR HALF ' + hourNames[h == 12 ? 0 : h];
        break;
      case 20:
        ret += 'TIEN VOOR HALF ' + hourNames[h == 12 ? 0 : h];
        break;
      case 21:
        ret += 'NEGEN VOOR HALF ' + hourNames[h % 12];
        break;
      case 22:
        ret += 'ACHT VOOR HALF ' + hourNames[h % 12];
        break;
      case 23:
        ret += 'ZEVEN VOOR HALF ' + hourNames[h % 12];
        break;
      case 24:
        ret += 'ZES VOOR HALF ' + hourNames[h % 12];
        break;
      case 25:
        ret += 'VIJF VOOR HALF ' + hourNames[h % 12];
        break;
      case 26:
        ret += 'VIER VOOR HALF ' + hourNames[h % 12];
        break;
      case 27:
        ret += 'DRIE VOOR HALF ' + hourNames[h % 12];
        break;
      case 28:
        ret += 'TWEE VOOR HALF ' + hourNames[h % 12];
        break;
      case 29:
        ret += 'EEN VOOR HALF ' + hourNames[h % 12];
        break;
      case 30:
        ret += 'HALF ' + hourNames[h % 12];
        break;
      case 31:
        ret += 'EEN OVER HALF ' + hourNames[h % 12];
        break;
      case 32:
        ret += 'TWEE OVER HALF ' + hourNames[h % 12];
        break;
      case 33:
        ret += 'DRIE OVER HALF ' + hourNames[h % 12];
        break;
      case 34:
        ret += 'VIER OVER HALF ' + hourNames[h % 12];
        break;
      case 35:
        ret += 'VIJF OVER HALF ' + hourNames[h % 12];
        break;
      case 36:
        ret += 'ZES OVER HALF ' + hourNames[h % 12];
        break;
      case 37:
        ret += 'ZEVEN OVER HALF ' + hourNames[h % 12];
        break;
      case 38:
        ret += 'ACHT OVER HALF ' + hourNames[h % 12];
        break;
      case 39:
        ret += 'NEGEN OVER HALF ' + hourNames[h % 12];
        break;
      case 40:
        ret += 'TIEN OVER HALF ' + hourNames[h % 12];
        break;
      case 41:
        ret += 'ELF OVER HALF ' + hourNames[h % 12];
        break;
      case 42:
        ret += 'TWAALF OVER HALF ' + hourNames[h % 12];
        break;
      case 43:
        ret += 'DERTIEN OVER HALF ' + hourNames[h % 12];
        break;
      case 44:
        ret += 'VEERTIEN OVER HALF ' + hourNames[h % 12];
        break;
      case 45:
        ret += 'KWART VOOR ' + hourNames[h % 12];
        break;
      case 46:
        ret += 'VEERTIEN VOOR ' + hourNames[h % 12];
        break;
      case 47:
        ret += 'DERTIEN VOOR ' + hourNames[h % 12];
        break;
      case 48:
        ret += 'TWAALF VOOR ' + hourNames[h % 12];
        break;
      case 49:
        ret += 'ELF VOOR ' + hourNames[h % 12];
        break;
      case 50:
        ret += 'TIEN VOOR ' + hourNames[h % 12];
        break;
      case 51:
        ret += 'NEGEN VOOR ' + hourNames[h % 12];
        break;
      case 52:
        ret += 'ACHT VOOR ' + hourNames[h % 12];
        break;
      case 53:
        ret += 'ZEVEN VOOR ' + hourNames[h % 12];
        break;
      case 54:
        ret += 'ZES VOOR ' + hourNames[h % 12];
        break;
      case 55:
        ret += 'VIJF VOOR ' + hourNames[h % 12];
        break;
      case 56:
        ret += 'VIER VOOR ' + hourNames[h % 12];
        break;
      case 57:
        ret += 'DRIE VOOR ' + hourNames[h % 12];
        break;
      case 58:
        ret += 'TWEE VOOR ' + hourNames[h % 12];
        break;
      case 59:
        ret += 'EEN VOOR ' + hourNames[h % 12];
        break;
    }
    if(h24 >= 12) {
      // Nachmittag von 12:00:00 - 23:59:59
      ret += ' NA DE MIDDAG';
    } else {
      // Vormittag von 00:00:00 - 11:59:59
      ret += ' VOOR DE MIDDAG';
    }
    return ret;
  }
});
