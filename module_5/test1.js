  //5 модуль.
 //Задание 1.
const evenOdd = +prompt('Введите число');
if(typeof evenOdd == "number" && !isNaN(evenOdd)){
  if(evenOdd === 0) {
    console.log('ноль')
  } else if (evenOdd % 2 === 0){
    console.log('чётное')
  } else {
    console.log('нечётное')
  }
} else {
  console.log('Упс, кажется, вы ошиблись')
}


