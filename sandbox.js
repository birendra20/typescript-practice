{
    //********type basics */
    var char = "abc";
    //char=14 we cannot change the variable type it will throw an error
    char = "cde"; //works fine
    var isBlackBelt = true;
    isBlackBelt = false;
    // isBlackBelt=23 throws an error
    var circ = function (diameter) {
        return diameter * Math.PI;
    };
}
//console.log(circ("hell")); //throws en error
console.log(circ(7.5));
