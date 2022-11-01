//модуль 6
//задание 5

//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
//Используйте Arrow Function синтаксис.

const multiply = (x, n) => {
  var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(multiply(6,3))
