console.log(2);
console.log(3);
console.log('hallo');
var x;
console.log(x);
x = 7;
console.log(x);
console.log('world' + 3 + 'world');
console.log(2 * '5');
console.log((2 + 3) * 2);
console.log(x);
x = x + 5;
console.log(x);
x += 2;
console.log(x);
x -= 4;
console.log(x);
x *= 2;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
var y = x++;
console.log(y);
var y = ++x;
console.log(y);
var x = 5 == 5;
console.log(x);
console.log(typeof x);
console.log(x == 2);
console.log(x < 2);
console.log(x);
var x = 4;
console.log(x);
console.log(5 === '5');
console.log(!5 > 10);
console.log(5 >= 5);
console.log(4 > 10);
console.log(5 !== 5);
console.log(5 >= 5 || 5 == 1);
console.log(5 >= 5 && 5 == 1);
console.log(!5 >= 5);
console.log(!5 == 5);
console.log((true || true) && !false);
document.getElementById('word').innerHTML = 'halo';
var word = document.getElementById('word');
var x = 5,
  y = 10;
var age = 16;
var num = -10;
age >= 18 ? (word.innerHTML = 'grown') : (word.innerHTML = 'notgrown');

if (num > 0) {
  word.innerHTML = 'plus';
} else if (num == 0) {
  word.innerHTML = 'zero';
} else {
  word.innerHTML = 'minus';
}

var box = document.getElementById('word');

var color = 'pink';

switch (color) {
  case 'green':
    box.style.backgroundColor = 'green';
    box.style.color = 'white';
    break;
  case 'yellow':
    box.style.backgroundColor = 'yellow';
    box.style.color = 'white';
    break;
  case 'red':
    box.style.backgroundColor = 'red';
    box.style.color = 'white';
    break;
  default:
    box.style.backgroundColor = 'grey';
    box.style.color = 'white';
    break;
}
