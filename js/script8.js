var word = document.getElementById('word');
var word2 = document.getElementById('word2');

//Math
//var liczba = prompt('Podaj liczbę', '0');
var liczba = 3;
word.innerHTML += '<br>' + 'liczba' + liczba;
word.innerHTML += '<br>' + 'Absolute: ' + Math.abs(liczba);
word.innerHTML += '<br>' + 'Round: ' + Math.round(liczba);
word.innerHTML += '<br>' + 'Ceil: ' + Math.ceil(liczba);
word.innerHTML += '<br>' + 'Floor: ' + Math.floor(liczba);
word.innerHTML += '<br>' + 'Power: ' + Math.pow(liczba, 3);
word.innerHTML += '<br>' + 'Sqrt: ' + Math.sqrt(liczba);
word.innerHTML += '<br>' + 'Pi: ' + Math.round(Math.PI * 100) / 100;
word.innerHTML += '<br>' + 'Random: ' + Math.floor(Math.random() * 10);

//Date
word2.innerHTML += '<br>' + 'Current: ' + Date();
var date1 = new Date(10000000000); //1.01.1970 milisekundy od tego momentu
word2.innerHTML += '<br>' + 'Date1 : ' + date1;

var date2 = new Date(1995, 3, 24, 1, 2, 3); //miesiące liczone od 0
word2.innerHTML +=
  '<br>' +
  'Date2 : ' +
  date2.getDate() +
  '.' +
  (date2.getMonth() + 1) +
  '.' +
  date2.getFullYear();

setTime();
setInterval(setTime, 1000);
function setTime() {
  var time = new Date();
  word2.innerHTML +=
    '<br>' +
    'Czas: ' +
    time.getHours() +
    ': ' +
    time.getMinutes() +
    ': ' +
    time.getSeconds();
}
