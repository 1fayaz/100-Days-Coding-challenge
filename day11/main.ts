//day 11
//Question 31
let usernames: string[] = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
}

//Question 32

let current_Name= ["User22","User33","User44"]

let new_User =["User1","User2","User3","User4","User5"]

new_User.forEach((newUser) => {
   if(
      current_Name.some(
   (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase() 
   )
   )  {
      console.log(`${new_User} will need to enter a new UserName.`);
   } else{
   console.log(`${new_User} is avaliable.`);

}
});

//Question 33

let numbers =[1,2,3,4,5,6,7,8,9];

numbers.forEach((number) => {
   let others ="th"
   if (number === 1){
      others = "st"
   }else if (number === 2){
      others = "nd"
   }else if (number === 3){
      others = "rd"
   }
   console.log(`${number}${others}`);
   
   }
)