console.log('読み込まれました');

/*
https://api.openweathermap.org/data/2.5/weather?APPID=4b5774e9f3d2a07b84f0f2f88e486224&q=London

これでAPIが動くよ！

*/

fetch('https://holidays-jp.github.io/api/v1/date.json')
  .then(response => response.text())
  .then(text => {
    console.log(text);
  });