/*Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

const arr = [11, "", 36];
let result = true
for (let i = 0; i < arr.length - 1; i++) {
  if (typeof arr[i] != typeof arr[i + 1]) {
    result = false
  }
}
console.log(result)