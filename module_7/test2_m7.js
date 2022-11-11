//модуль 7
//задание 2
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
const home = {
  kithen: 1,
  room: 2,
  balcony: 1
}

function checkName(str, obj) {
        return(str in home);
}
checkName("room", home)