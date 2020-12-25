

// обЪект цилиндр

var height = prompt('ввести высоту цилиндра');
var radius = prompt('ввести радиус цилиндра');

var cylinder = {
    h: height,
    r: radius,
    v: function() {
        return Math.PI * this.r ** 2 * this.h;
    },
    s: function() {
        return 2 * Math.PI * this.r * this.h;
    }
};

// функция getResult

function getResult(a, b, c) {
    if (c === "+") {
        return a + b;
    } else if (c === '-') {
        return a - b;
    } else if (c === '*') {
        return a * b;
    } else if (c === '/') {
        return a / b;
    } else {
        return;
    }
}
console.log(getResult(2, 3, '/'));

// Ибонусы

function isCharPresent(str, smb) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === smb) {
            return true;
        }
    }
        return false;
}

console.log(isCharPresent('vova', 'x'));


function charIndexOf(str, smb) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === smb) {
            return str[i];
        }
    }
        return -1;
}

console.log(charIndexOf('vova', 'a'));