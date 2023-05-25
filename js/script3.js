var box = document.getElementById('word');
var box2 = document.getElementById('word2');

loop1: for (var j = 0; j < 3; j++) {
  loop2: for (var i = 0; i < 10; i++) {
    box.innerHTML += '<br>' + j + 'x';
    if (i > 5) {
      continue loop1;
    }
    if (i % 2 == 1) {
      continue;
    }
    box.innerHTML += '<br>' + j + '+' + i;
  }
}

top: for (var j = 0; j < 3; j++) {
  inner: for (var i = 0; i < 10; i++) {
    if (i == 5) {
      break top;
    }
    box2.innerHTML += '<br>' + j + '+' + i;
  }
}

skip: {
  alert('warning');
  break skip;
  alert('skip');
}
