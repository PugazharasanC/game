var random = [0, -1, -1, -1];
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
    button.id = 'guess';
    button.type = 'submit';
    button.value = 'Guess';
    //button.onclick = guess;
    button.classList.add('form');
    button.classList.add('form-control');
    button.classList.add('col');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    start.parentNode.classList.add('row');
    start.parentNode.appendChild(inp);
    start.parentNode.appendChild(button);
    start.parentNode.setAttribute('onsubmit', 'guessVal();return false;');
    start.parentNode.removeChild(start);
    var newDiv = document.createElement('div');
    newDiv.id = 'result';
    newDiv.style.height = '350px';
    newDiv.style.overflowY = 'auto';
    button.parentNode.parentNode.appendChild(newDiv);
    createRandom();
}
var guessVal = () => {
    var val = document.getElementById('input').value;
    var cow = 0;
    var bull = 0;
    var str = val;
    val = val.split('');
    var rand = random.join('');
    for (var ind = 0; ind < 4; ind++) {
        val[ind] = parseInt(val[ind]);
        if (val[ind] == random[ind]) {
            cow++;
            val[ind] = random[ind] = -1;
        }
    }
    if (cow != 4)
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
    random = rand.split('');
    var newP = document.createElement('p');
    if (cow == 4) {
        newP.innerHTML = '<h1>Game Over</h1>'
        var button = document.getElementById('guess');
        button.style.display = 'none';
    } else {
        newP.innerHTML = 'You got ' + cow + ' Cows & ' + bull + ' Bulls for ' + str;
    }
    var res = document.getElementById('result');
    res.insertBefore(newP, res.firstChild);
    return false;
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
