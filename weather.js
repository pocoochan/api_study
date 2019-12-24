fetch('https://api.openweathermap.org/data/2.5/weather?APPID=4b5774e9f3d2a07b84f0f2f88e486224&q=London')
.then(response => response.text())
.then(text => {
  var data = JSON.parse(text);
  console.log(data.weather[0].description);
});