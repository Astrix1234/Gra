var word = document.getElementById('word');

function add(a, b) {
  return 'wynik =' + (a + b);
}
var sum = add(5, 5);
word.innerHTML += '<br>' + 'suma =' + sum;
//alert(add(10, 30));

function silnia(n) {
  if (n == 1) return 1;
  else return n * silnia(n - 1);
}
word.innerHTML += '<br>' + 'silnia =' + silnia(4);
