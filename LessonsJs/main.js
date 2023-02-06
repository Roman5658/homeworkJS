//ЗАДАНИЕ 1//
// let strText = 'hello';
// console.log(strText)
//
// strText = 'owu';
// console.log(strText);
//
// strText = 'com';
// console.log(strText);
//
// strText = 'ua';
// console.log(strText);
//
// let num = 1;
// console.log(num)
//
// num = 10;
// console.log(num)
//
// num = -999;
// console.log(num)
//
// num = 123;
// console.log(num)
//
// const PI = 3.14;
// console.log(PI)
//
// const E = 2.7;
// console.log(E)
//
// num = 16;
// console.log(num)
//
// strText = 'true';
// console.log(strText)
//
// strText = 'false';
// console.log(strText)
//
//
//
//
// //ЗАДАНИЕ 2
//
// //let firstName = 'Roman';
// //let middleName = 'Nikolayevich';
// //let lastName = 'Pysanyi';
//
// //console.log(`${firstName} ${middleName} ${lastName}`);
//
//
//
// //ЗАДАНИЕ 3
//
// let a = 100;
// console.log(typeof a)
//
// let b = '100';
// console.log(typeof b)
//
// let c = true;
// console.log(typeof c)
//
//
//
// //ЗАДАНИЕ 4
//
//let firstName = prompt(`enter firstName`);
//let middleName = prompt('enter middleName');
//let age = +prompt('enter age');

//let res = `${firstName} ${middleName} ${age}`;
//console.log(res);

// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let names = [
    'Alina',
    'Roman',
    'Vovan',
    'Marry',
    'Elis',
    'Kira',
    'Olexander',
    'Malysz',
    'Taras',
    'Vodka'];

console.log(names)
//console.log(names[0];
//console.log(names[1];
//console.log(names[2];
//console.log(names[3];
//console.log(names[4];
//console.log(names[5];
//console.log(names[6];
//console.log(names[7];
//console.log(names[8];
//console.log(names[9];


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let objeckt1 = {
    title: 'Ono',
    pageCount: 1167,
    genre: 'horror'
}


console.log(objeckt1)

let objeckt2 = {
    title: 'Harry Potter',
    pageCount: 3636,
    genre: 'Action'
}
console.log(objeckt2)

let objeckt3 = {
    title: 'Sherlock',
    pageCount: 1392,
    genre: 'detective'
}
console.log(objeckt3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let objeckt4 = {
    title: 'Ono',
    pageCount: 1167,
    genre: 'horror',
    author : {
        name : 'King',
        age : 75,

    }
}

console.log(objeckt4)

let objeckt5 = {
    title: 'Harry Potter',
    pageCount: 1167,
    genre: 'horror',
    author : {
        name : 'J.K.Rowling',
        age : 57,

    }
}

console.log(objeckt5)

let objeckt6 = {
    title: 'Sherlock',
    pageCount: 1167,
    genre: 'horror',
    author : {
        name : 'Arthur Conan Doyle',
        age : 1859 - 1930,

    }
}

console.log(objeckt6)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//



let user = {name: 'Alina', username: 'khoptowa'}
console.log(user)
user.password = 1993;
console.log(user.password)


let user1 = {name: 'Roman', username: 'Pysanyi'}
console.log(user1)
user1.password = 1992;
console.log(user1.password)

let user2 = {name: 'Vovan', username: 'Kontuzik'}
console.log(user2)
user2.password = 1990;
console.log(user2.password)

let user3 = {name: 'Marry', username: 'Lech'}
console.log(user3)
user3.password = 1995;
console.log(user3.password)

let user4 = {name: 'Elis', username: 'Blizze'}
console.log(user4)
user4.password = 1997;
console.log(user4.password)

let user5 = {name: 'Olexander', username: 'Jalovyi'}
console.log(user5)
user5.password = 1996;
console.log(user5.password)

let user6 = {name: 'Elis', username: 'Han'}
console.log(user6)
user6.password = 1998;
console.log(user6.password)

let user7 = {name: 'Mikkey', username: 'Leght'}
console.log(user7)
user7.password = 1999;
console.log(user7.password)

let user8 = {name: 'Ikhor', username: 'Rey'}
console.log(user8)
user8.password = 1234;
console.log(user8.password)

let user9 = {name: 'Adam', username: 'Luz'}
console.log(user9)
user9.password = 1212;
console.log(user9.password)







// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 5;
// if (x > 0) {
//     alert('yes');
//     console.log('yes');
// }
// else {
//     alert('no');
//     console.log('no')
// }



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 47;
console.log(time)
if (time <= 15)
    console.log('перша чверть')
else
if (time <= 30)
    console.log('друга чверть')
else
if (time <= 45)
    console.log('третя чверть')
else
if (time <= 59)
    console.log('четверта чверть')
else
    console.log('Incorrect number time')


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 25;
console.log(day)
if (day <= 10)
    console.log('перша декада')
else
if (day <= 20)
    console.log('друга декада')
else
if (day <= 31)
    console.log('третя декада')
else
    console.log('Incorrect number decads')

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let x = 5;
// let y = 7;
// if (x == y) {
//    console.log('5');
// }
// else {
//    console.log('7')
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// x = undefined;
// x = x || 'default';
// console.log(x);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша
//     за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);

let JavaScriptComplex = 5;
if (JavaScriptComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let JavaComplex = 6;
if (JavaComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let PythonComplex = 6;
if (PythonComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}



let QAComplex = 4;
if (QAComplex > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let FullStack = 7;
if (FullStack > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}


let Frontend = 4;
if (Frontend > 5) {
    alert('super');
    console.log('super')
}
else {
    alert('error');
    console.log('error')
}