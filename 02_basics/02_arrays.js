const marval_heros = [ "captainA","Spiderman","Loki" ]
const dc_heros = [ "superman", "batman","wonderwomen"]


marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log (marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_heros = [...marval_heros,...dc_heros]
//console.log(all_new_heros);

const another_array = [1,2,3 ,[1,2],5,[1,2,[2,2]]]

const real_another_array = another_array.flat(3)
console.log(real_another_array);


console.log(Array.isArray("pc"));
console.log(Array.from("pc"));
console.log(Array.from({name: "pc"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
