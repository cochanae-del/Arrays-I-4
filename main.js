// Do not modify this line directly
var ranks = ["domain", "kingdom", "category", "family", "genus"];

// Write your code below
ranks.splice(2,1, "phylum", "class", "order",);
// add 3 strings, remove string "category".
// add "species" to end of the array
ranks.splice(7,0, "species");
console.log(ranks);