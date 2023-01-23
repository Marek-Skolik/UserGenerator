const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = [
  'Marek',
  'Mateusz',
  'Andrzej',
  'Tomasz',
  'Wojciech',
  'Jerzy',
  'Rafał',
  'Paweł',
  'Grzegorz',
  'Michał',
];
const femaleNames = [
  'Katarzyna',
  'Aleksandra',
  'Izabela',
  'Małgorzata',
  'Anna',
  'Zofia',
  'Zuzanna',
  'Karolina',
  'Marta',
  'Marlena',
];
const lastNames = [
  'Jankowski',
  'Miarka',
  'Słowacki',
  'Krasiński',
  'Mickiewicz',
  'Nowak',
  'Kowalski',
  'Godula',
  'Batory',
  'Wigura',
];

const randChoice = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

const people = [];
const MAX_AGE = 78;
const MIN_AGE = 18;

for (let i = 1; i <= 20; i++) {
  const gender = randChoice(genders);
  const firstName = randChoice(gender == 'M' ? maleNames : femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * (MAX_AGE - MIN_AGE - 1) + MIN_AGE);

  const randomPerson = {
    gender,
    firstName,
    lastName,
    age,
  };
  people.push(randomPerson);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw new Error('not working');
  console.log('The file has been saved!');
});