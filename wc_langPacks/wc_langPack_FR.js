/*
Autor: Guillaume Lemaire
Datum: 17.03.2023
Version: 1.1

WordClock LanguagePack FR

*/

wc_addLanguagePack({
  langCode: 'FR',
  letterSet: [
    ['I', 'L', 'X', 'E', 'S', 'T', 'B', 'D', 'O', 'U', 'Z', 'E'],
    ['U', 'N', 'E', 'D', 'E', 'U', 'X', 'T', 'R', 'O', 'I', 'S'],
    ['M', 'E', 'Q', 'U', 'A', 'T', 'R', 'E', 'C', 'I', 'N', 'Q'],
    ['S', 'I', 'X', 'A', 'S', 'E', 'P', 'T', 'H', 'U', 'I', 'T'],
    ['N', 'E', 'U', 'F', 'D', 'I', 'X', 'O', 'N', 'Z', 'E', 'N'],
    ['H', 'E', 'U', 'R', 'E', 'S', 'D', 'M', 'O', 'I', 'N', 'S'],
    ['D', 'A', 'L', 'E', 'T', 'E', 'T', 'E', 'C', 'I', 'N', 'Q'],
    ['D', 'I', 'X', 'T', 'I', 'M', 'E', 'Q', 'U', 'A', 'R', 'T'],
    ['A', 'V', 'I', 'N', 'G', 'T', 'N', 'D', 'E', 'M', 'I', 'E'],
    ['V', 'I', 'N', 'G', 'T', '-', 'C', 'I', 'N', 'Q', 'L', 'X'],
  ],
  timeString: function (h, m, settings = { round: false, fuzzyTime: 'none' }) {
    var ret = 'IL EST ';
    h %= 12;
    if (h == 0) h = 12;
    var hourNames = [
      'UNE',
      'DEUX',
      'TROIS',
      'QUATRE',
      'CINQ',
      'SIX',
      'SEPT',
      'HUIT',
      'NEUF',
      'DIX',
      'ONZE',
      'DOUZE',
    ];

    // 5+0, 5+1, 5+2 => not nearly
    // 5+3, 5+4 => nearly
    /*
    if (
      (settings.fuzzyTime == 'both' || settings.fuzzyTime == 'after') &&
      m % 5 <= 2 && m % 5 != 0
    ) {
      ret += '+ DE ';
    }

    // 5+0, 5+1, 5+2 => not nearly
    // 5+3, 5+4 => nearly
    if (
      (settings.fuzzyTime == 'both' || settings.fuzzyTime == 'before') &&
      m % 5 >= 3
    ) {
	  if (m > 55) { h = (h + 1) % 12; if (h ==0) h=12;};
      ret += 'PRESQUE ';
    }
*/
    switch (
      (settings.round ? Math.round(m / 5) * 5 : Math.floor(m / 5) * 5) % 60
    ) {
      case 0:
        ret += hourNames[h - 1] + ' HEURES';
        break;
      case 5:
        ret += hourNames[h - 1] + ' HEURES CINQ';
        break;
      case 10:
        ret += hourNames[h - 1] + ' HEURES DIX';
        break;
      case 15:
        ret += hourNames[h - 1] + ' HEURES ET QUART';
        break;
      case 20:
        ret += hourNames[h - 1] + ' HEURES VINGT';
        break;
      case 25:
        ret += hourNames[h - 1] + ' HEURES VINGT-CINQ';
        break;
      case 30:
        ret += hourNames[h - 1] + ' HEURES ET DEMIE';
        break;
      case 35:
        ret += hourNames[h % 12] + ' HEURES MOINS VINGT-CINQ';
        break;
      case 40:
        ret += hourNames[h % 12] + ' HEURES MOINS VINGT';
        break;
      case 45:
        ret += hourNames[h % 12] + ' HEURES MOINS QUART';
        break;
      case 50:
        ret += hourNames[h % 12] + ' HEURES MOINS DIX';
        break;
      case 55:
        ret += hourNames[h % 12] + ' HEURES MOINS CINQ';
        break;
    }
    return ret;
  },
});
