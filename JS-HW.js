/*Домашка:
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) 
*/
let hamburger = 1;
let fries =1;

if(hamburger >= 3 && fries >=1)
{
    console.log('Ми поїли')
}  else {
    console.log('Ми йдемо в інше кафе')
}


/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

let price1 = 1600;
if (price1 >= 1000 && price1 <= 1900) 
{	
    console.log(price1);
}



/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/
// без оператора НЕ ! 
let price = 1600;
if (price >= 1000 && price <= 1900) 
{	
    console.log(price);
}

//з оператором НЕ ! 
let value = 1600;
if ( value < 1000 || value > 1900 || value !== 1900 || value !== 1000 ) 
{	
    console.log(value);
}



/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let season = 3;

if(season != 2 && season != 3 && season != 4 && season > 0 && season <4){
    console.log('winter')
}
else if (season != 1 && season != 3 && season != 4 && season > 0 && season <4){
    console.log('spring')
} 
else if (season != 1 && season != 2 && season != 4 && season > 0 && season <4){
    console.log('summer')
} 
else {
    console.log('autumn')
}




/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

let a = 1154;
let b = 17;
let c = 511;

if(a < c && a > b)
{console.log(a)}

else if (a < b && a > c)
{console.log(a)}

else if (b < c && b > a)
{console.log(b)}

else if (c < b && b < a)
{console.log(b)}

else if (a < c && c < b)
{console.log(c)}

else {console.log(c)
}



/*    
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/
let day = 5;

switch(day){
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;
    case 5: 
        console.log('Friday');
        break;
    case 6: 
        console.log('Saturday');
        break; 
    case 7: 
        console.log('Sunday');
        break;       
    default:
        console.log('This day not exists for the week');
        break;  
}




/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/
let q = `/`;
switch(q){
    case `*`: 
        console.log(result=90*5);
        break;
    case `+`: 
        console.log(result=90+5);
        break;
    case `-`: 
        console.log(result=90-5);
        break;
    case `/`: 
        console.log(result=90/5);
        break;
   }




/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

*/

//1й варіант  - цей варіант коду не спрацював
let word = "tomorrow"
function escapeRegExp(string) {
return string.replace(/[aeiouy]/gi, '');
}

//2й варіант - цей варіант коду не спрацював
let text = "tomorrow";
let result = string.replace(/[aeiouy]/gi, ''); 
return (text);


//3й -  працюючий варіант 
let disemvowel = (str) => str.replace(/[aeiouy]/gi, '')
console.log(disemvowel('tomorrow'));


/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

let x = 13330;// відстань в метрах
let y = (x/1000);
{         
if( y == 1 ) 
{console.log(y + ' кілометр')}

else if ( y > 1 && y <= 4)
{console.log(y + ' кілометри')}

else if ( y >= 5)
{console.log(y + ' кілометрів')}

else if (y < 1) 
{console.log(y + ' кілометра')}
}
