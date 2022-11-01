//модуль 6
//задание 3

//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
function takeNumber (num1) {
  return function (num2) {
  return (num1 + num2)
  }
}
// const result = takeNumber(5);
// const  sum  = result(6);
const sum = takeNumber(6)(4) //тоже работает
console.log(sum)