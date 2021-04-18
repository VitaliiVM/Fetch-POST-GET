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
            document.querySelector('.out-7').innerHTML = `<img src="${data}" style="width: 200px" height="200px">`;
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

function t11() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=2&name=Vitalii',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-11').innerHTML = response;
        })
}

document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================

function t12() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=3&num1=45&num2=90',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-12').innerHTML = response;
        })
}

document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================

function t13() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=4&num1=45&num2=90',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-13').innerHTML = response;
        })
}

document.querySelector('.b-13').onclick = t13;

// Task 14 ============================================


function t14() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=5',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-14').innerHTML = response;
        })
}

document.querySelector('.b-14').onclick = t14;

// Task 15============================================

function t15() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=6&num1=99&num2=34',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-15').innerHTML = response;
        })
}

document.querySelector('.b-15').onclick = t15;

// Task 16 ============================================

function t16() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=7',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-16').innerHTML = `<img src="${response}" style="width: 200px" height="200px">`;
        })
}

document.querySelector('.b-16').onclick = t16;

// Task 17 ============================================

function t17() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=8&year=1992',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-17').innerHTML = response;
        })
}

document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================

function t18() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=9&m=1&d=1&y=1',
    })
        .then(response => response.text())
        .then(response => {
            console.log(response);
            document.querySelector('.out-18').innerHTML = response;
        })
}

document.querySelector('.b-18').onclick = t18;

