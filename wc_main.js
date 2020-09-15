/*
Autor: Raphael Hoeser
Datum: 11.07.2017
Version: 1.1

WordClock Main JS

*/

// Settings
var wc_settings = {
  lang: 'DE',
  updateInterval: 1000,
  round: false,
  showMinutePoints: true,
  stencilMode: false,
  fuzzyTime: "both", // Can be none, before (for nearly...), after (just was...) or both
};

// ClassNames of HTML Elements
var wc_wcClassName = 'wc';
var wc_minutesClassName = wc_wcClassName + '__minutes';
var wc_minuteDotClassName = wc_wcClassName + '__minute';
var wc_rowClassName = wc_wcClassName + '__row';
var wc_letterClassName = wc_rowClassName + '__letter';
var wc_stencilLetterClassName = wc_rowClassName + '__stencil';
var wc_brightLetterClassName = wc_letterClassName + '--bright';

// Vars for the Wordclock (not to be changed)
var wc_updateInterval;

// Developer Options
var wc_debugMode = 0; // Debug Mode defines which notes should be logged by wc_debugLog(note, priority) (0 = all Massages default)

// Language Packs
var wc_languagePacks = [];

// adds a LanguagePack to the database
function wc_addLanguagePack(pack) {
  wc_languagePacks[wc_languagePacks.length] = pack;
}

// logging Function, which only logs notes with priotity > wc_debugMode
function wc_debugLog(note, priority) {
  if (priority - wc_debugMode > 0) console.log(note);
}

// Init to place Letters in clock and set Interval
function wc_init() {
  wc_setLetters(wc_settings.lang);
  wc_updateInterval = window.setInterval(wc_update, wc_settings.updateInterval);
  wc_update();
}

// Set Load Listener to fire init();
window.addEventListener('load', wc_init);

// Updates Time
function wc_update() {
  var html_wcs = document.getElementsByClassName(wc_wcClassName);
  var date = new Date();
  var pack = wc_getLanguagePack(wc_settings.lang);
  wc_setMinuteDots(date.getMinutes() % 5, wc_settings);
  var timestring = pack.timeString(
    date.getHours(),
    date.getMinutes(),
    wc_settings
  );
  var timewords = timestring.split(' ');
  var displayChars = '';
  var rows = pack.letterSet;
  var allRows = [];
  for (var i = 0; i < rows.length; i++) {
    allRows = allRows.concat(rows[i]);
  }
  displayChars = allRows.join('');
  for (var i = 0; i < html_wcs.length; i++) {
    var dcToWork = displayChars;
    var letters = html_wcs[i].getElementsByClassName(wc_letterClassName);
    var offset = 0;
    wc_setMode(letters, 0, dcToWork.length, false);
    for (var j = 0; j < timewords.length; j++) {
      var start = dcToWork.search(timewords[j]);
      wc_setMode(
        letters,
        start + offset,
        start + offset + timewords[j].length,
        true
      );
      offset += start + timewords[j].length;
      dcToWork = dcToWork.substr(start + timewords[j].length);
    }
  }
}

// Sets all letters from index start to index end-1 to bright if mode == true, else dark
function wc_setMode(domElems, start, end, mode) {
  for (var i = start; i < end; i++) {
    if (mode) domElems[i].classList.add(wc_brightLetterClassName);
    else domElems[i].classList.remove(wc_brightLetterClassName);
  }
}

// Sets lettes by Language Code to all Clocks
function wc_setLetters(langCode) {
  var html_wcs = document.getElementsByClassName(wc_wcClassName);
  var currentLangPack = wc_getLanguagePack(langCode);

  for (var i = 0; i < html_wcs.length; i++)
    wc_setHTMLLetters(html_wcs[i], currentLangPack);
}

// Sets HTMl letters of given pack to given clock
function wc_setHTMLLetters(clock, langPack) {
  var letters = langPack.letterSet;
  for (var i = 0; i < letters.length; i++) {
    var html_row = document.createElement('div');
    html_row.classList.add(wc_rowClassName);
    for (var j = 0; j < letters[i].length; j++) {
      var html_letter = document.createElement('span');
      html_letter.classList.add(wc_letterClassName);
      if (wc_settings.stencilMode) {
        html_letter.classList.add(wc_stencilLetterClassName);
      }
      html_letter.innerText = letters[i][j];
      html_row.appendChild(html_letter);
    }
    clock.appendChild(html_row);
  }
}

// returns Language Pack by LangCode
function wc_getLanguagePack(langCode) {
  for (var i = 0; i < wc_languagePacks.length; i++) {
    if (wc_languagePacks[i].langCode == langCode) return wc_languagePacks[i];
  }
  return false;
}

function wc_setMinuteDots(dots, settings) {
  for (var clock of document.getElementsByClassName(wc_minutesClassName)) {
    if (settings.showMinutePoints) {
      clock.classList.remove('wc--hidden');
      for (var i = 1; i <= dots; i++) {
        clock
          .getElementsByClassName(wc_minuteDotClassName + '__' + i)[0]
          .classList.add('wc__minute--bright');
        if (wc_settings.stencilMode) {
          clock
            .getElementsByClassName(wc_minuteDotClassName + '__' + i)[0]
            .classList.add('wc__minute--stencil');
        }
      }
      for (var i = dots + 1; i <= 4; i++) {
        clock
          .getElementsByClassName(wc_minuteDotClassName + '__' + i)[0]
          .classList.remove('wc__minute--bright');
        if (wc_settings.stencilMode) {
          clock
            .getElementsByClassName(wc_minuteDotClassName + '__' + i)[0]
            .classList.add('wc__minute--stencil');
        }
      }
    } else {
      clock.classList.add('wc--hidden');
    }
  }
}
