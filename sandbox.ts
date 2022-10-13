{
  //********type basics */

  let char = "abc";

  //char=14 we cannot change the variable type it will throw an error
  char = "cde"; //works fine

  let isBlackBelt = true;
  isBlackBelt = false;
  // isBlackBelt=23 throws an error

  var circ = (diameter: number) => {
    return diameter * Math.PI;
  };
}
//console.log(circ("hell")); //throws en error
console.log(circ(7.5));
