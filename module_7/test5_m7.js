//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricApp {
  constructor(name, power, color) {
    this.name = name,
    this.power = power,
    this.color = color,
    this.isPlugged = false;
  }
  //включение
  turnOn() {
    console.log(`${this.name} включен в розетку!`);
    this.isPlugged = true;
  }
  //выключение
  turnOff() {
    console.log(`${this.name} выключен из розетки!`);
    this.isPlugged = false;
  }
}

class Hoover extends ElectricApp {
  constructor(name, brand, power, powerType, color) {
    super(name, power, color)
    this.brand = brand,
    this.powerType = powerType,
    this.isPlugged = false
  }
}

// function Hoover(name, brand, power, powerType, color) {
//   this.name = name,
//   this.brand = brand,
//   this.power = power,
//   this.powerType = powerType,
//   this.color = color,
//   this.isPlugged = false
// }
// Hoover.prototype = new ElectricApp()

class Computer extends ElectricApp {
  constructor(name, brand, power, type, use, color) {
    super(name, power, color)
    this.brand = brand,
    this.use = use,
    this.type = type,
    this.isPlugged = false
  }
}

// function Computer(name, brand, power, type, use, color) {
//   this.name = name,
//   this.brand = brand,
//   this.power = power,
//   this.type = type,
//   this.use = use,
//   this.color = color,
//   this.isPlugged = false
// }
// Computer.prototype = new ElectricApp();

class Lamp extends ElectricApp {
  constructor(name, brand, power, location, color) {
    super(name, power, color)
    this.brand = brand,
    this.location = location,
    this.isPlugged = false
  }
}

// function Lamp(name, brand, power, location) {
//   this.name = name,
//   this.brand = brand,
//   this.power = power,
//   this.location = location,
//   this.isPlugged = true
// }
// Lamp.prototype = new ElectricApp();

//экземпляры, 3 шт для каждого 'подкласса' электроники

const braLamp = new Lamp('бра', 'Lumion', 40, 'на стене', 'белый');
const homePC = new Computer('Table PC', 'Intel', 120, 'стационарный', 'для дома', 'черный');
const handStick = new Hoover('беспроводной пылесос', 'Dyson', 425, 'от аккумулятора', 'синий');

console.log(homePC)
homePC.turnOn();
console.log(handStick)
handStick.turnOff();
console.log(braLamp)
braLamp.turnOn();