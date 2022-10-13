// {
//   //********type basics */

//   let char = "abc";

//   //char=14 we cannot change the variable type it will throw an error
//   char = "cde"; //works fine

//   let isBlackBelt = true;
//   isBlackBelt = false;
//   // isBlackBelt=23 throws an error

//   var circ = (diameter: number) => {
//     //typescript allows type check
//     return diameter * Math.PI;
//   };
//   //console.log(circ("hell")); //throws en error
//   console.log(circ(7.5));
// }
{
  //******** arrays***** */

  let names = ["alpha", "bravo", "charlie"];

  names.push("toad");
  //names.push(3) //error
  //names[0] = 3; //err

  let numbers = [10, 20, 30, 40];

  numbers.push(25);
  //numbers.push("shaun")
  //numbers[1] = "shaun"

  let mixed = ["ken", 4, "abc", 8, 9];
  mixed.push("ryu");
  mixed.push(10);
  mixed[0] = 3;
  //mixed[1] = true; //err boolean value does not exist while declaring
}
