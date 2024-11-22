// TUPLES

// Tuples sis adata type in TS that is similar to an array but has afixed number of elements,
// and by specifying type of each Element at specific position within tuples.

let articles : readonly [number, string, boolean]=[15,"all titles", true];

articles = [12,"only one title",false]


console.log(articles);

// destructuring the tuple into individual variables

const [id, title,published ] = articles;

console.log(id);
console.log(title);
console.log(published);



