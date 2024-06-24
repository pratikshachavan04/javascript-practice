const name = "pratiksha"
const repoCount = 1

//console.log(name + repoCount + " git");

//console.log (`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pratiksha-pc')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.toLowerCase());
//console.log(gameName.charAt('0'));
//console.log(gameName.indexOf('p'));


const newString = gameName.substring(0,5)
//console.log(newString);

//const anotherString = gameName.slice(0,4)
//console.log(anotherString);

const newStringOne = "   pratiksha "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://newgame.com/new%20game"

console.log(url.replace('%20', '-'));

console.log(url.includes('key'));

console.log(gameName.split('-'));
