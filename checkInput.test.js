const checkInput = require('./checkInput');

test('ви скасували', () => {
  expect(checkInput(null)).toBe('ви скасували');
});

test('Empty String', () => {
  expect(checkInput('   ')).toBe('Empty String');
});

test('number is Ba_NaN', () => {
  expect(checkInput('qwerty')).toBe('number is Ba_NaN');
});

test('OK!', () => {
  expect(checkInput('123456789')).toBe('OK!');
});