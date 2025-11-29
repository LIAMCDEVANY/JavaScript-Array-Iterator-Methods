'use strict';

// sample data
const nums = [1, 2, 3, 4];
const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David'];

const cars = [
  { color: 'red', make: 'BMW', year: 2001 },
  { color: 'white', make: 'Toyota', year: 2013 },
  { color: 'blue', make: 'Ford', year: 2014 },
  { color: 'white', make: 'Tesla', year: 2016 }
];

const thingsInMyRoom = ['bed', 'lamp', 'table', 'random elephant', 'three tacos'];

const allElephants = [
  'random elephant',
  'random elephant',
  'random elephant',
  'random elephant'
];

const votes = ['Yes', 'No', 'Yes', 'Yes', 'No'];
const numsForReduce = [25, 5, 100, 10];

function display(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  if (typeof value === 'string') {
    el.textContent = value;
  } else {
    el.textContent = JSON.stringify(value, null, 2);
  }
}

// map
const awesomeInstructors = instructors.map((instructor) => {
  return `${instructor} is awesome`;
});

// filter
const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];
const notJerks = people.filter((person) => person !== 'jerks');

// find
const firstWhiteCar = cars.find((car) => {
  return car.color === 'white';
});

// findIndex
const firstWhiteCarIdx = cars.findIndex((car) => {
  return car.color === 'white';
});

// some
const hasFord = cars.some((car) => {
  return car.make === 'Ford';
});

const isARandomElephantInMyRoom = thingsInMyRoom.some((thing) => {
  return thing === 'random elephant';
});

// every
const everyCarIsBlue = cars.every((car) => {
  return car.color === 'blue';
});

const isEverythingInMyRoomARandomElephant = allElephants.every((thing) => {
  return thing === 'random elephant';
});

// reduce
const sum = numsForReduce.reduce((acc, num) => {
  return acc + num;
}, 0);

const tally = votes.reduce((acc, vote) => {
  if (acc[vote]) {
    acc[vote] = acc[vote] + 1;
  } else {
    acc[vote] = 1;
  }
  return acc;
}, {});

document.addEventListener('DOMContentLoaded', () => {
  display('map-output', awesomeInstructors);

  display('filter-output', {
    source: people,
    result: notJerks
  });

  display('find-output', {
    firstWhiteCar,
    missingCar: cars.find((car) => car.color === 'black') || null
  });

  display('findindex-output', {
    firstWhiteCarIdx,
    missingCarIdx: cars.findIndex((car) => car.color === 'black')
  });

  display('some-output', {
    hasFord,
    isARandomElephantInMyRoom
  });

  display('every-output', {
    everyCarIsBlue,
    isEverythingInMyRoomARandomElephant
  });

  display('reduce-output', {
    numsForReduce,
    sum,
    tally
  });
});