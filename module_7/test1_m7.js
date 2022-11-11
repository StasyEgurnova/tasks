//модуль 7
//задание 1
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const newObj = {
  num: 123,
  str: "One two tree",
  boo: true
}
function funcObj(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
   console.log(key, obj[key]);
  }
}
}

funcObj(newObj)