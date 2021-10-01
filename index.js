// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
}

function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat() {
  return cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}

let someMovies = [
  "The sound of music",
  "the wizard of oz",
  "saw",
  "saw2",
  "Annie",
];
let horrorMovies = someMovies.slice(2, 4);
console.log(horrorMovies);
console.log(someMovies);
//the first arguement in the slice example (2) means its starting at that index and ending at the element before the next index in the arguement (4)
let scaryMovies = someMovies.splice(2, 2);
//the first arguement in the splice example (2) means its starting at that index number and the next arguement states how many elements to remove(2) its confusing
console.log(scaryMovies);
console.log(someMovies);
//Use Case (fancy coding talk) or (EXAMPLE) for spread operator
let bids = [100, 500, 250, 3000, 450, 700, 125];
let winner = Math.max(...bids);
//Math.max under the hood
let maxBid = 0;
for (let bid of bids) {
  if (bid > maxBid) {
    maxBid = bid;
  }
}
