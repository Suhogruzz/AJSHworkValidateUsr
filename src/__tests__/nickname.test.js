import Validator from '../nickname';

test.each([
  ['Ryan', true],
  ['John', true],
  ['Ryan1Gosling', true],
  ['Ryan-gosling', true],
])('valid nicknames', (name, expected) => {
  const nicknames = new Validator(name);
  expect(nicknames.validateNickname()).toBe(expected);
});

test.each([
  ['1Ryan', false],
  ['_-John', false],
  ['Ryan111111Gosling', false],
  ['Ryan-gosling123', false],
])('valid nicknames', (name, expected) => {
  const nicknames = new Validator(name);
  expect(nicknames.validateNickname()).toBe(expected);
});
