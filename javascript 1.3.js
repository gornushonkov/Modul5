/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

let s = "Hello";
let rezch = "";
for (let i = s.length-1; i >= 0; i--){
    rezch += s[i];
}
console.log(rezch);