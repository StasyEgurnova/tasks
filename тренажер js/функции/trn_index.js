
//Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает в консоль обратный отсчет, начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

function countDown(n) {
	for (let i = n; i >= 1; i--) {
		console.log(i)
	}
};
countDown(5);

//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.


function getPercents(percent, number) {
	return number / 100 * percent;
}

alert(getPercents(70, 150));

//Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения. Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

function repeatWord(word, count) {
	let words = " ";
	for (let i = 1; i <= count; i++) {
		words += word + i;
	}
	console.log(words);
}
repeatWord('привет', 5);

//Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.
// Функции должны принимать аргументы.

function createAdder(a) {
	return function addA(b) {
		return a + b;
	}
}

const add5 = createAdder(5);
// alert( add5(5) ) // Должно получиться 10
alert(add5(12)) // Должно получиться 17

//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.

function getMonth(n) {
	if (n === 1) return 'январь';
	if (n === 2) return 'февраль';
	if (n === 3) return 'март';
	if (n === 4) return 'апрель';
	if (n === 5) return 'май';
	if (n === 6) return 'июнь';
	if (n === 7) return 'июль';
	if (n === 8) return 'август';
	if (n === 9) return 'сентябрь';
	if (n === 10) return 'октябрь';
	if (n === 11) return 'ноябрь';
	if (n === 12) return 'декабрь';
	else { return 'такого месяца нет' };
}


alert(getMonth(8))
