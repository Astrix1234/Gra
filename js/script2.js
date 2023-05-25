var box = document.getElementById('word');
var box2 = document.getElementById('word2');
var box3 = document.getElementById('word3');

var i = 0;

while (i < 10) {
  box.innerHTML += i;
  i++;
}

var j = 0;

do {
  box2.innerHTML += j;
  j++;
} while (j < 10);

for (var k = 0; k < 10; k++) {
  box3.innerHTML += k;
}
