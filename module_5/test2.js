//модуль 5
//задание 2
const x = null
switch (typeof x) {
    case 'number':
        console.log('x — число');
        break;
    case 'string':
        console.log('x - строка');
        break;
    case 'boolean':
        console.log('x - логический тип');
        break;
    default:
        console.log('Тип x не определён');
}