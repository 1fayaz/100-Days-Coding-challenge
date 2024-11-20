// Type Annotations With Arrays

// Type annotations with arrays allow you to specify the expected data types of the array elements, ensuring type safety in your code.

let Laptops : string[]=["Macbook", "Lenovo","HP","Dell"]


for(let i =0; i < Laptops.length; i++) {
   console.log(`laptop: ${Laptops[i].toUpperCase()}`);
   
}

// ----------------------------------------------------------------------------------------------------------

// Type Annotations With Multidimensional Arrays

let arrayOne:number [] =[1,2,3,4]
let array2:string[] =["A","B","C","D"]
let array3:(string | number) []=[1,2,3,4,"A","B"]
