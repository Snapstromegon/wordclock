/*
Autor: Reto Zoss (zoss.li)
Datum: 20.05.2018
Version: 1.0

WordClock LanguagePack CH - Bern

*/

wc_addLanguagePack({
  langCode: 'CH_BERN',
  letterSet: [
    ['Ä', 'S', 'M', 'I', 'S', 'C', 'H', 'U', 'F', 'Ü', 'F'],
    ['Z', 'Ä', 'H', 'N', 'Z', 'W', 'Ä', 'N', 'Z', 'G', 'I'],
    ['N', 'A', 'B', 'H', 'V', 'I', 'E', 'R', 'T', 'U', 'L'],
    ['V', 'O', 'R', 'N', 'A', 'B', 'H', 'A', 'U', 'B', 'I'],
    ['E', 'I', 'S', 'S', 'Z', 'W', 'Ö', 'I', 'W', 'E', 'I'],
    ['D', 'R', 'Ü', 'Ü', 'E', 'A', 'V', 'I', 'E', 'R', 'I'],
    ['F', 'Ü', 'F', 'I', 'N', 'S', 'Ä', 'C', 'H', 'S', 'I'],
    ['S', 'I', 'B', 'N', 'I', 'E', 'A', 'C', 'H', 'T', 'I'],
    ['N', 'Ü', 'N', 'I', 'Z', 'Ä', 'H', 'N', 'I', 'L', 'F'],
    ['E', 'U', 'F', 'I', 'F', 'Z', 'W', 'Ö', 'U', 'F', 'I']
  ],
  timeString: function(h, m, settings = { round: false }) {
    var ret = 'ÄS ISCH ';

    if(settings.round && m>57) {
      h+=1;
    }
    h %= 12;
    if (h == 0) h = 12;
    var hourNames = [
      'EIS',
      'ZWÖI',
      'DRÜÜ',
      'VIERI',
      'FÜFI',
      'SÄCHSI',
      'SIBNI',
      'ACHTI',
      'NÜNI',
      'ZÄHNI',
      'EUFI',
      'ZWÖUFI'
    ];
    switch (
      (settings.round ? Math.round(m / 5) * 5 : Math.floor(m / 5) * 5) % 60
    ) {
      case 0:
        ret += h == 1 ? 'EIS' : hourNames[h - 1];
        break;
      case 5:
        ret += 'FÜF AB ' + hourNames[h - 1];
        break;
      case 10:
        ret += 'ZÄH AB ' + hourNames[h - 1];
        break;
      case 15:
        ret += 'VIERTU AB ' + hourNames[h - 1];
        break;
      case 20:
        ret += 'ZWÄNZG AB ' + hourNames[h - 1];
        break;
      case 25:
        ret += 'FÜF VOR HAUBI ' + hourNames[h % 12];
        break;
      case 30:
        ret += 'HAUBI ' + hourNames[h % 12];
        break;
      case 35:
        ret += 'FÜF AB HAUBI ' + hourNames[h % 12];
        break;
      case 40:
        ret += 'ZWÄNZG VOR ' + hourNames[h % 12];
        break;
      case 45:
        ret += 'VIERTU VOR ' + hourNames[h % 12];
        break;
      case 50:
        ret += 'ZÄH VOR ' + hourNames[h % 12];
        break;
      case 55:
        ret += 'FÜF VOR ' + hourNames[h % 12];
        break;
    }
    return ret;
  }
});
