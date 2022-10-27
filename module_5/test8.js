//модуль 5
//задание 8
//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
let map = new Map();
map.set("apple", "green");
map.set('name', 'Kira');
map.set("age", 55);
map.set(90, "number");
for (let item of map) {
  console.log(`Ключ - ${item[0]}, значение - ${map[1]}`);
}
