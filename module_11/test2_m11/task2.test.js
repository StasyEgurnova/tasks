import {getMonth} from './task2';

describe("tests for getMonth function", () => {

  const month = getMonth(6);

  it("month 13 will return the value 'такого месяца нет'", ()=> {
    expect(getMonth(13)).toBe('такого месяца нет')
  }),
  it("month 6 will return the value 'июнь'", ()=> {
    expect(month).toBe('июнь')
  }),
    it("month 11 will return the value 'ноябрь'", ()=> {
    expect(getMonth(11)).toBe('ноябрь')
    }),
    it("not a number will return the result 'такого месяца нет'", ()=> {
    expect(getMonth('hello')).toBe('такого месяца нет')
  })
})