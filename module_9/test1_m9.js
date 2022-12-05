//Вам дана заготовка и результат, который вы должны получить.
//Ваша задача — написать код, который будет преобразовывать XML в JS - объект и выводить его в консоль.
/* <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list> */

const parser = new DOMParser();
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml")

const students = xmlDOM.querySelectorAll("student");

let list = [];
students.forEach(value => {
  list.push({
    name: `${value.querySelector('first').textContent} ${value.querySelector('second').textContent}`,
    age: Number(value.querySelector("age").textContent),
    prof: value.querySelector("prof").textContent,
    lang: value.querySelector("name").getAttribute("lang")
  })
});
console.log(list);

