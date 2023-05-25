var word = document.getElementById('word');

//1 sposób
var adam = {
  name: 'Adam',
  age: 25,
  show() {
    return '<br>' + 'Imię: ' + this.name + ' wiek: ' + this.age;
  },
};
console.log(adam);

word.innerHTML += '<br>' + adam.name;
word.innerHTML += '<br>' + 'lat:' + adam['age'];

word.innerHTML += '<br>' + adam.show();

//2 sposób
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.show = function () {
    return '<br>' + 'Imię: ' + this.name + ' wiek: ' + this.age;
  };
}

var bartek = new Person('Bartek', 19);
console.log(bartek);
word.innerHTML += '<br>' + bartek.name;

var ola = new Person('Ola', 22);
word.innerHTML += '<br>' + ola.name;

word.innerHTML += '<br>' + bartek.show();
word.innerHTML += '<br>' + ola.show();
