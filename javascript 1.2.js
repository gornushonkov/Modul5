/*Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

Примечание: в этом задании использовать promt не нужно.*/

let x = "";

if (typeof(x) === "number") {
   console.log('x is a number')
}

else  if (typeof(x) === "string") {
    console.log('x is a string')    
}

else if (typeof(x) === "boolean") {
    console.log('x is a logic') 
}

else console.log('x is undefined')
