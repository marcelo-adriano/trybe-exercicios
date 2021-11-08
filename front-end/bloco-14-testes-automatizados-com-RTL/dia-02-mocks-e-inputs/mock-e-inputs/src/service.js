const randomNumber = () => Math.round(Math.random() * 100);

const uppercaser = (anyString) => anyString.toUpperCase();

const firstLetter = (anyString) => anyString.charAt(0);

const concatTwoSrings = (firstString, secondString) => firstString.concat(secondString)

module.exports = { randomNumber, uppercaser, firstLetter, concatTwoSrings };