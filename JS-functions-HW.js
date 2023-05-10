

/*Домашка:
1.   Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) 
*/

function checkFood(hamburger,fries) {
    if (hamburger >= 3 && fries >=1) {
      console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе')
    };
    }

    checkFood(21,2)
  

/*
2.   Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/


function checkPrice(price) {
    if (price >= 1000 && price <= 1900) {
      console.log(price,'грн:Ціна в межах значення');
    } else {
        console.log('Ціна не допустима')
    };
    }

    checkPrice(1111)
  

/*
3.   Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/
// без оператора НЕ ! 
function checkPrice(price) {
    if (price >= 1000 && price <= 1900) {
      console.log(price,'грн:Ціна в межах значення');
    } else {
        console.log('Ціна не допустима')
    };
    }

    checkPrice(1111)
  
//з оператором НЕ ! 
function checkPrice1(price1) {
    if (!(price1 >= 1000 && price1 <= 1900)) {
      console.log(price1,'грн:Ціна в межах значення');
    } else {
        console.log('Ціна не допустима')
    };
    }

    checkPrice1(1411)



/*
4.   За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

function Season(Quater){

    if (Quater == 1){
        console.log('Winter')
    } else if (Quater == 2){
        console.log('Spring')
    } else if (Quater == 3){
        console.log('Summer')
    } else {(Quater === 4)
        console.log('Autumn')
    }}
    Season(2)

/*
5.   Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

function Avg(a,b,c){
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
}}
    Avg(222,14,88)


/*    
6.   Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/
function DayName(Day){

    if (Day == 1){
        console.log('Monday')
    } else if (Day == 2){
        console.log('Tuesday')
    } else if (Day == 3){
        console.log('Wednesday')
    }
    else if (Day == 4){
        console.log('Thursday')
    } 
    else if (Day == 5){
        console.log('Friday')
    } 
    else if (Day == 6){
        console.log('Saturday')
    }
    else {(Day === 7)
        console.log('Sunday')
    }}
    DayName(4)


/*
7.   За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/
function math (a) {
switch(a){
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
}
math ('*')

/*8.*   Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

*/

function textword (word) {
    console.log(word.replace(/[aeiouy]/gi, ''))
}
textword ('newdayiscoming')

/*
9.*   Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

function distance (meters)  {
    let kilometers = meters/1000
 
 function findTheEnd (meters) {
     if(Number.isInteger(meters)) {
         let Divide = meters%10;
     if (Divide == 0 || (meters%1 == 0 && meters >= 11 && meters <= 19)) {
         end = "ів"
     } else if (Divide  == 1) {
         end = ""
     } else if (Divide  >= 2 && Divide  <=4) {
         end = "и"
     }else if (Divide  >= 5 && Divide  <=9) {
         end = "ів"
     }
 }else {
         end = "a"
     }
     return end
     }
     console.log(`${meters} метр${findTheEnd(meters)} це ${kilometers} кілометр${findTheEnd(kilometers)}`);
 }
 
 distance(200,00);