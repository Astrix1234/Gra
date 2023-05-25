var word = document.getElementById('word');

var array = new Array('poniedziałek', 'wtorek', 'środa');
word.innerHTML += '<br>' + array[0];

array[3] = 'czwartek';
word.innerHTML += '<br>' + array[3];

array[4] = 'piątek';
array[5] = 'sobota';
array[6] = 'niedziela';
word.innerHTML += '<br>' + array.length;

console.log(array);

word.innerHTML += '<br>' + '--------';
for (var i = 0; i < array.length; i++) {
  word.innerHTML += '<br>' + array[i];
}

array.forEach(x => console.log(x));

//2 sposób
var array2 = new Array(3);
array2[0] = 10;
array2[1] = true;
array2[2] = 'JavaScript';

console.log(array2);

//3 sposób
var array3 = ['wiosna', 'lato', 'jesień'];
console.log(array3);

var array4 = array.concat(array2).concat(array3);
console.log(array4);
