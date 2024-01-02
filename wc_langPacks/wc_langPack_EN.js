/*
Autor: Raphael Hoeser
Datum: 11.07.2017
Version: 1.1

WordClock LanguagePack EN

*/

wc_addLanguagePack({
  langCode: 'EN',
  letterSet: [
    ['I', 'T', 'E', 'I', 'S', 'Z', 'S', 'J', 'U', 'S', 'T'],
    ['A', 'F', 'T', 'E', 'R', 'N', 'E', 'A', 'R', 'L', 'Y'],
    ['A', 'C', 'Q', 'U', 'A', 'R', 'T', 'E', 'R', 'K', 'O'],
    ['T', 'W', 'E', 'N', 'T', 'Y', 'F', 'I', 'V', 'E', 'X'],
    ['H', 'A', 'L', 'F', 'C', 'T', 'E', 'N', 'E', 'T', 'O'],
    ['P', 'A', 'S', 'T', 'B', 'S', 'E', 'V', 'E', 'N', 'L'],
    ['O', 'N', 'E', 'T', 'W', 'O', 'T', 'H', 'R', 'E', 'E'],
    ['F', 'O', 'U', 'R', 'F', 'I', 'V', 'E', 'S', 'I', 'X'],
    ['N', 'I', 'N', 'E', 'K', 'T', 'W', 'E', 'L', 'V', 'E'],
    ['E', 'I', 'G', 'H', 'T', 'E', 'L', 'E', 'V', 'E', 'N'],
    ['T', 'E', 'N', 'P', 'Y', 'O', 'C', 'L', 'O', 'C', 'K'],
  ],
  timeString: function (h, m, settings = { round: false, fuzzyTime: 'none' }) {
    var ret = 'IT IS ';

    if(settings.round && m>57) {
      h+=1;
    }
    h %= 12;
    if (h == 0) h = 12;
    var hourNames = [
      'ONE',
      'TWO',
      'THREE',
      'FOUR',
      'FIVE',
      'SIX',
      'SEVEN',
      'EIGHT',
      'NINE',
      'TEN',
      'ELEVEN',
      'TWELVE',
    ];

    // 5+0, 5+1, 5+2 => not nearly
    // 5+3, 5+4 => nearly
    if (
      (settings.fuzzyTime == 'both' || settings.fuzzyTime == 'after') &&
      m % 5 <= 2 && m % 5 != 0
    ) {
      ret += 'JUST AFTER ';
    }

    // 5+0, 5+1, 5+2 => not nearly
    // 5+3, 5+4 => nearly
    if (
      (settings.fuzzyTime == 'both' || settings.fuzzyTime == 'before') &&
      m % 5 >= 3
    ) {
	  if (m > 55) { h = (h + 1) % 12; if (h ==0) h=12;};
      ret += 'NEARLY ';
    }

    switch (
      (settings.round || settings.fuzzyTime == 'both' || settings.fuzzyTime == 'before' ? Math.round(m / 5) * 5 : Math.floor(m / 5) * 5) % 60
    ) {
      case 0:
        ret += hourNames[h - 1] + ' OCLOCK';
        break;
      case 5:
        ret += 'FIVE PAST ' + hourNames[h - 1];
        break;
      case 10:
        ret += 'TEN PAST ' + hourNames[h - 1];
        break;
      case 15:
        ret += 'A QUARTER PAST ' + hourNames[h - 1];
        break;
      case 20:
        ret += 'TWENTY PAST ' + hourNames[h - 1];
        break;
      case 25:
        ret += 'TWENTYFIVE PAST ' + hourNames[h - 1];
        break;
      case 30:
        ret += 'HALF PAST ' + hourNames[h - 1];
        break;
      case 35:
        ret += 'TWENTYFIVE TO ' + hourNames[h % 12];
        break;
      case 40:
        ret += 'TWENTY TO ' + hourNames[h % 12];
        break;
      case 45:
        ret += 'A QUARTER TO ' + hourNames[h % 12];
        break;
      case 50:
        ret += 'TEN TO ' + hourNames[h % 12];
        break;
      case 55:
        ret += 'FIVE TO ' + hourNames[h % 12];
        break;
    }
    return ret;
  },
});
