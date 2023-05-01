console.log('arr' + ' - object');

console.log(2 + 2);

console.log(2 + '2');

console.log(2 + + '2');

let incr = 10;
let decr = 10;

// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

// ++incr;
// --decr;
// console.log(incr);
// console.log(decr);

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 < 2);
console.log(5%2);


console.log(2*4 = 8);
console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === '8');
console.log(2*4 === 8);


// let isChecked = false;
// let isClosed = false;

// console.log(isChecked && isClosed);
// console.log(isChecked || isClosed);


let isChecked = true;
let isClosed = false;

console.log(isChecked && !isClosed);
console.log(isChecked || isClosed);

let hamburger = true;
let fries = false;

if (hamburger&&fries){
    console.log('Я ситий')
}


let hamburger1 = 5;
let fries1 = 4;

if (hamburger1&&fries1){
    console.log('Я ситий')
}

console.log(hamburger1&&fries1)

// завжди будуть false 
//0
//""
//null
//undefined
//NaN

// хочете або 3 гамбургери і колу або дві порції нагетсів і дві картоплі фрі

let hamburgers = 2;
let cola = 2;
let nuggets = 2;
let fries2 = 1;

if(hamburgers >= 3 && cola || nuggets >= 2 && fries2 >= 2){
    console.log('всі поїли')
}
