var num = +prompt('Введите число');

var deg = +prompt('Введите степень');

var res = 1;

for(let i = 1; i <= deg; i++ ) {
    res = res * num
    if(i >= deg) {
        alert('Ответ: ' + res )
        console.log(res);
    }else{
        if(res <= 0 || isNaN(num) || isNaN(deg) || isNaN(num && deg) || num == 0 || deg == 0 || num && deg == 0 ) {
            alert('Ошибка')
        }else{
            console.log('Ошибка');
        }
    }
}



var a = 8;

var b = ('$');

var c = ('!');

var d = (' ');

for(let i2 = 0; i2 <= a; i2++) {
    d = d + b;
    console.log(d + c);
}