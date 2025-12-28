'use strict';

/* =========================
   DATA SETS
   ========================= */

// Inventors data
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// People list (Last, First)
const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blake, William'
];

// Travel methods data
const travelMethods = [
  'car',
  'car',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car'
];

/* =========================
   HELPER FUNCTION
   ========================= */

function display(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = JSON.stringify(value, null, 2);
}

/* =========================
   ARRAY ITERATOR EXERCISES
   ========================= */

document.addEventListener('DOMContentLoaded', () => {

  // Exercise 1: Inventors born in the 1500s
  const ex1 = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
  display('ex1', ex1);

  // Exercise 2: Array of inventor full names
  const ex2 = inventors.map(inv => `${inv.first} ${inv.last}`);
  display('ex2', ex2);

  // Exercise 3: Sort inventors by birth year (oldest → youngest)
  const ex3 = [...inventors].sort((a, b) => a.year - b.year);
  display('ex3', ex3);

  // Exercise 4: Total years lived by all inventors
  const ex4 = inventors.reduce((total, inv) => {
    return total + (inv.passed - inv.year);
  }, 0);
  display('ex4', ex4);

  // Exercise 5: Sort inventors by years lived (longest first)
  const ex5 = [...inventors].sort((a, b) => {
    const aYears = a.passed - a.year;
    const bYears = b.passed - b.year;
    return bYears - aYears;
  });
  display('ex5', ex5);

  // Exercise 6: People with "de" in their last name
  const ex6 = people.filter(name => name.toLowerCase().includes('de'));
  display('ex6', ex6);

  // Exercise 7: Sort people alphabetically by last name
  const ex7 = [...people].sort((a, b) => {
    const [aLast] = a.split(', ');
    const [bLast] = b.split(', ');
    return aLast.localeCompare(bLast);
  });
  display('ex7', ex7);

  // Exercise 8: Count instances of each travel method
  const ex8 = travelMethods.reduce((acc, method) => {
    acc[method] = (acc[method] || 0) + 1;
    return acc;
  }, {});
  display('ex8', ex8);

  // Exercise 9: Check if any inventor lived 90+ years
  const ex9 = inventors.some(inv => (inv.passed - inv.year) >= 90);
  display('ex9', ex9);
});