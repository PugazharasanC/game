var random = [0, 0, 0, 0];
var start = () => {
    var start = document.getElementById('button');
    var inp = document.createElement('input');
    inp.value = 1000;
    inp.id = 'input';
    inp.type = 'number';
    inp.setAttribute('min', '1000');
    inp.setAttribute('max', '9999');
    inp.classList.add('form');
    inp.classList.add('col');
    inp.classList.add('form-control');
    var button = document.createElement('input');
    button.type = 'submit';
    button.value = 'Guess';
    button.classList.add('form');
    button.classList.add('form-control');
    button.classList.add('col');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    start.parentNode.classList.add('row');
    start.parentNode.appendChild(inp);
    start.parentNode.appendChild(button);
    start.parentNode.setAttribute('onsubmit', 'guess();return false;');
    start.parentNode.removeChild(start);
    var newPre = document.createElement('pre');
    newPre.id = 'result';
    button.parentNode.parentNode.appendChild(newPre);
    createRandom();
}
var guess = () => {
    var val = document.getElementById('input').value;
    var cow = 0;
    var bull = 0;
    val = val.split('');
    console.log('The random num is ' + random.join(''));
    for (var ind = 0; ind < 4; ind++) {
        val[ind] = parseInt(val[ind]);
        if (val[ind] == random[ind]) {
            cow++;
            val[ind] = random[ind] = -1;
        }
    }
    for (var ind = 0; ind < 4; ind++) {
        if (val[ind] != -1) {
            for (var ind2 = 0; ind2 < 4; ind2++) {
                if (val[ind] == random[ind2]) {
                    bull++;
                    val[ind] = random[ind2] = -1;
                    break;
                }
            }
        }
    }
    createRandom();
    document.getElementById('result').innerHTML = 'You got ' + cow + ' Cows & ' + bull + ' Bulls';
}
var createRandom = () => {
    random = [0, -1, -1, -1];
    while (random[0] <= 0) {
        random[0] = Math.floor(Math.random() * 10);
    }
    while (random[1] < 0) {
        random[1] = Math.floor(Math.random() * 10);
    }
    while (random[2] < 0) {
        random[2] = Math.floor(Math.random() * 10);
    }
    while (random[3] < 0) {
        random[3] = Math.floor(Math.random() * 10);
    }
}