/*
Autor: Raphael Hoeser
Datum: 11.07.2017
Version: 1.1

WordClock LanguagePack DE minuten

*/

wc_addLanguagePack({
  langCode: 'DE-min',
  letterSet: 
[
    ['E', 'S', 'M', 'I', 'S', 'T', 'E', 'F', 'Ü', 'N', 'F', 'E', 'I', 'N', 'S'],
    ['Z', 'W', 'E', 'I', 'S', 'I', 'E', 'B', 'E', 'N', 'N', 'E', 'U', 'N'],
    ['S', 'E', 'C', 'H', 'S', 'V', 'I', 'E', 'R', 'Z', 'W', 'Ö', 'L', 'F'],
    ['E', 'L', 'F', 'D', 'R', 'E', 'I', 'Z', 'E', 'H', 'N', 'A', 'C', 'H','T'],
    ['E', 'I', 'N', 'S', 'R', 'A', 'C', 'H', 'T', 'H', 'Z', 'E', 'H', 'N'],
    ['D', 'R', 'E', 'I', 'V', 'I', 'E', 'R', 'Z', 'E', 'H', 'N', 'O', 'R'],
    ['V', 'I', 'E', 'R', 'T', 'E', 'L', 'Z', 'N', 'A', 'C', 'H', 'T', 'R'],
    ['V', 'O', 'R', 'I', 'E', 'L', 'F', 'N', 'H', 'A', 'L', 'B', 'H', 'S'],
    ['Z', 'W', 'E', 'I', 'S', 'E', 'C', 'H', 'S', 'F', 'Ü', 'N', 'F', 'N'],
    ['E', 'L', 'F', 'B', 'E', 'I', 'N', 'S', 'H', 'V', 'I', 'E', 'R', 'S'],
    ['N', 'E', 'U', 'N', 'Z', 'E', 'H', 'N', 'S', 'I', 'E', 'B', 'E', 'N'],
    ['K', 'D', 'R', 'E', 'I', 'N', 'A', 'C', 'H', 'R', 'A', 'C', 'H', 'T'],
    ['Z', 'W', 'Ö', 'L', 'F', 'E', 'L', 'F', 'Z', 'U', 'H', 'R', 'F', 'L'],
    ['B', 'A', 'M', 'R', 'V', 'O', 'R', 'M', 'I', 'T', 'T', 'A', 'G', 'E'],
    ['A', 'M', 'X', 'Z', 'N', 'A', 'C', 'H', 'M', 'I', 'T', 'T', 'A', 'G'],
  ],
  timeString: function(h, m, settings = { round: false }) {
    var ret = 'ES IST ';

    if(settings.round && m>57) {
      h+=1;
    }
    var h24 = h;
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
      (settings.round ? Math.round(m / 1) * 1 : Math.floor(m / 1) * 1) % 60
    ) {
      case 0:
        ret += (h == 1 ? 'EIN' : hourNames[h - 1]) + ' UHR';
        break;
      case 1:
        ret += 'EINS NACH ' + hourNames[h - 1];
        break;
      case 2:
        ret += 'ZWEI NACH ' + hourNames[h - 1];
        break;
      case 3:
        ret += 'DREI NACH ' + hourNames[h - 1];
        break;
      case 4:
        ret += 'VIER NACH ' + hourNames[h - 1];
        break;
      case 5:
        ret += 'FÜNF NACH ' + hourNames[h - 1];
        break;
      case 6:
        ret += 'SECHS NACH ' + hourNames[h - 1];
        break;
      case 7:
        ret += 'SIEBEN NACH ' + hourNames[h - 1];
        break;
      case 8:
        ret += 'ACHT NACH ' + hourNames[h - 1];
        break;
      case 9:
        ret += 'NEUN NACH ' + hourNames[h - 1];
        break;
      case 10:
        ret += 'ZEHN NACH ' + hourNames[h - 1];
        break;
      case 11:
        ret += 'ELF NACH ' + hourNames[h - 1];
        break;
      case 12:
        ret += 'ZWÖLF NACH ' + hourNames[h - 1];
        break;
      case 13:
        ret += 'DREIZEHN NACH ' + hourNames[h - 1];
        break;
      case 14:
        ret += 'VIERZEHN NACH ' + hourNames[h - 1];
        break;
      case 15:
        ret += 'VIERTEL NACH ' + hourNames[h - 1];
        break;
      case 16:
        ret += 'VIERZEHN VOR HALB ' + hourNames[h == 12 ? 0 : h];
        break;
      case 17:
        ret += 'DREIZEHN VOR HALB ' + hourNames[h % 12];
        break;
      case 18:
        ret += 'ZWÖLF VOR HALB ' + hourNames[h % 12];
        break;
      case 19:
        ret += 'ELF VOR HALB ' + hourNames[h % 12];
        break;
      case 20:
        ret += 'ZEHN VOR HALB ' + hourNames[h % 12];
        break;
      case 21:
        ret += 'NEUN VOR HALB ' + hourNames[h % 12];
        break;
      case 22:
        ret += 'ACHT VOR HALB ' + hourNames[h % 12];
        break;
      case 23:
        ret += 'SIEBEN VOR HALB ' + hourNames[h % 12];
        break;
      case 24:
        ret += 'SECHS VOR HALB ' + hourNames[h % 12];
        break;
      case 25:
        ret += 'FÜNF VOR HALB ' + hourNames[h % 12];
        break;
      case 26:
        ret += 'VIER VOR HALB ' + hourNames[h % 12];
        break;
      case 27:
        ret += 'DREI VOR HALB ' + hourNames[h % 12];
        break;
      case 28:
        ret += 'ZWEI VOR HALB ' + hourNames[h % 12];
        break;
      case 29:
        ret += 'EINS VOR HALB ' + hourNames[h % 12];
        break;
      case 30:
        ret += 'HALB ' + hourNames[h % 12];
        break;
      case 31:
        ret += 'EINS NACH HALB ' + hourNames[h % 12];
        break;
      case 32:
        ret += 'ZWEI NACH HALB ' + hourNames[h % 12];
        break;
      case 33:
        ret += 'DREI NACH HALB ' + hourNames[h % 12];
        break;
      case 34:
        ret += 'VIER NACH HALB ' + hourNames[h % 12];
        break;
      case 35:
        ret += 'FÜNF NACH HALB ' + hourNames[h % 12];
        break;
      case 36:
        ret += 'SECHS NACH HALB ' + hourNames[h % 12];
        break;
      case 37:
        ret += 'SIEBEN NACH HALB ' + hourNames[h % 12];
        break;
      case 38:
        ret += 'ACHT NACH HALB ' + hourNames[h % 12];
        break;
      case 39:
        ret += 'NEUN NACH HALB ' + hourNames[h % 12];
        break;
      case 40:
        ret += 'ZEHN NACH HALB ' + hourNames[h % 12];
        break;
      case 41:
        ret += 'ELF NACH HALB ' + hourNames[h % 12];
        break;
      case 42:
        ret += 'ZWÖLF NACH HALB ' + hourNames[h % 12];
        break;
      case 43:
        ret += 'DREIZEHN NACH HALB ' + hourNames[h % 12];
        break;
      case 44:
        ret += 'VIERZEHN NACH HALB ' + hourNames[h % 12];
        break;
      case 45:
        ret += 'VIERTEL VOR ' + hourNames[h % 12];
        break;
      case 46:
        ret += 'VIERZEHN VOR ' + hourNames[h % 12];
        break;
      case 47:
        ret += 'DREIZEHN VOR ' + hourNames[h % 12];
        break;
      case 48:
        ret += 'ZWÖLF VOR ' + hourNames[h % 12];
        break;
      case 49:
        ret += 'ELF VOR ' + hourNames[h % 12];
        break;
      case 50:
        ret += 'ZEHN VOR ' + hourNames[h % 12];
        break;
      case 51:
        ret += 'NEUN VOR ' + hourNames[h % 12];
        break;
      case 52:
        ret += 'ACHT VOR ' + hourNames[h % 12];
        break;
      case 53:
        ret += 'SIEBEN VOR ' + hourNames[h % 12];
        break;
      case 54:
        ret += 'SECHS VOR ' + hourNames[h % 12];
        break;
      case 55:
        ret += 'FÜNF VOR ' + hourNames[h % 12];
        break;
      case 56:
        ret += 'VIER VOR ' + hourNames[h % 12];
        break;
      case 57:
        ret += 'DREI VOR ' + hourNames[h % 12];
        break;
      case 58:
        ret += 'ZWEI VOR ' + hourNames[h % 12];
        break;
      case 59:
        ret += 'EINS VOR ' + hourNames[h % 12];
        break;
    }
    if(h24 >= 12) {
      // Nachmittag von 12:00:00 - 23:59:59
      ret += ' AM NACHMITTAG';
    } else {
      // Vormittag von 00:00:00 - 11:59:59
      ret += ' AM VORMITTAG';
    }
    return ret;
  }
});    

