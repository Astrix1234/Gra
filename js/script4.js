var word = document.getElementById('word');

add(5);
add(10, 20);
add(10, 20, 5);
function add(a, b) {
  if (typeof b === 'undefined') {
    b = 1;
  }
  if (arguments.length < 3) {
    word.innerHTML += '<br>' + a + ' + ' + b + ' = ' + (a + b);
  } else {
    word.innerHTML +=
      '<br>' +
      a +
      ' + ' +
      b +
      ' + ' +
      arguments[2] +
      ' = ' +
      (a + b + arguments[2]);
  }
}

function hallo() {
  alert('hallo');
}
