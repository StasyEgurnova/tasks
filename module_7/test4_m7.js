function ElectricApp(name,power,color) {
  this.name = name,
  this.power = power,
  this.color = color,
  this.isPlugged = false
}
//включение
ElectricApp.prototype.turnOn = function() {
  console.log(`${this.name} включен в розетку!`);
  this.isPlugged = true;
};
//выключение
ElectricApp.prototype.turnOff = function() {
  console.log(`${this.name} выключен из розетки!`);
  this.isPlugged = false;
};
//создание подкатегорий(подклассов)
function Hoover(name, brand, power, powerType, color) {
  this.name = name,
  this.brand = brand,
  this.power = power,
  this.powerType = powerType,
  this.color = color,
  this.isPlugged = false
}
Hoover.prototype = new ElectricApp()

function Computer(name, brand, power, type, use, color) {
  this.name = name,
  this.brand = brand,
  this.power = power,
  this.type = type,
  this.use = use,
  this.color = color,
  this.isPlugged = false
}
Computer.prototype = new ElectricApp();

function Lamp(name, brand, power, location) {
  this.name = name,
  this.brand = brand,
  this.power = power,
  this.location = location,
  this.isPlugged = true
}
Lamp.prototype = new ElectricApp();

//экземпляры, 3 шт для каждого 'подкласса' электроники

const braLamp = new Lamp('бра', 'Lumion', 40, 'на стене');
const homePC = new Computer('Table PC', 'Intel', 120, 'стационарный', 'для дома', 'черный');
const handStick = new Hoover('беспроводной пылесос', 'Dison', 425, 'от аккумулятора', 'синий');

console.log(homePC)
homePC.turnOn();

