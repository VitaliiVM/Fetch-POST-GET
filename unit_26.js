// Task 1 ============================================

function t1() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1")
        .then(data => {
            console.log(data);
            return data.text()
        })
        .then(data => {
            document.querySelector('.out-1').innerHTML = data;
        })
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================

function t2() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Vitalii")
        .then(data => {
            console.log(data);
            return data.text()
        })
        .then(data => {
            document.querySelector('.out-2').innerHTML = data;
        })
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================

function t3() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=3&num1=34&num2=29")
        .then(data => {
            console.log(data);
            return data.text();
        })
        .then(data => {
            document.querySelector('.out-3').innerHTML = data;
        })
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================

function t4() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=4&num1=34&num2=29")
        .then(data => {
            console.log(data);
            return data.text();
        })
        .then(data => {
            document.querySelector('.out-4').innerHTML = data;
        })
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================

function t5() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=5")
        .then(data => {
            console.log(data);
            return data.text()
        })
        .then(data => {
            document.querySelector('.out-5').innerHTML = data;
        })
}
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================


function t6() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=6&num1=34&num2=29")
        .then(data => {
            console.log(data);
            return data.text();
        })
        .then(data => {
            document.querySelector('.out-6').innerHTML = data;
        })
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================

function t7() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7")
        .then(data => {
            console.log(data);
            return data.text()
        })
        .then(data => {
            document.querySelector('.out-7').innerHTML += `<img src="${data}" style="width: 200px" height="200px">`;
        })
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================

function t8() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=8&year=1992")
        .then(data => {
            console.log(data);
            return data.text();
        })
        .then(data => {
            document.querySelector('.out-8').innerHTML = data;
        })
}

document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================

function t9() {
    fetch( "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=9&m=1&d=1&y=1")
        .then(data => {
            console.log(data);
            return data.text();
        })
        .then(data => {
             document.querySelector('.out-9').innerHTML = data;
        })
}

document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================

function t10() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=1',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-10').innerHTML = response;
        })

}
document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {

}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {

}

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {

}

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {

}

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {

}

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {

}

// ваше событие здесь!!!

