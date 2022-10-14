"use strict";
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
// {
//   //******** arrays***** */
//   let names = ["alpha", "bravo", "charlie"];
// names="hello" //err
//   names.push("toad");
//   //names.push(3) //error
//   //names[0] = 3; //err
//   let numbers = [10, 20, 30, 40];
//   numbers.push(25);
//   //numbers.push("shaun")
//   //numbers[1] = "shaun"
//   let mixed = ["ken", 4, "abc", 8, 9];
//   mixed.push("ryu");
//   mixed.push(10);
//   mixed[0] = 3;
//   //mixed[1] = true; //err boolean value does not exist while declaring
// }
// {
//   //**************objects*********** */
//   let ninja = {
//     name: "mario",
//     belt: "black",
//     age: 30,
//   };
//   ninja.age = 40;
//   ninja.name = "ryu";
//   //ninja.age="hell" //err
//   //ninja.skills ="xc" //err because skill does not exist in original object
//   //ninja=""//err
//   ninja = {
//     name: "abc",
//     belt: "black",
//     age: 40,
//   };
//   //   ninja = {
//   //     name: "abc",
//   //     belt: "black",
//   //   };err because age is missing ,even a single property should not be missed or added
// }
// {
//   //*******explicit types ******** */
//   let char: string;
//   let age: number;
//   let isLoggedIn: boolean;
//   //age= "hello" //err
//   age = 15;
//   // arrays
//   let ninjas: string[] = [];
//   ninjas.push("shaun");
//   //union types
//   let mixed: (string | number | boolean)[] = [];
//   mixed.push("hello");
//   mixed.push(20);
//   mixed.push(false);
//   console.log(mixed);
//   let uid: string | number;
//   uid = "123";
//   uid = 123;
//   // uid = true //error
//   //objects
//   let ninjaOne: object; //notice here while declaring type of variable there is "colon", not a "="
//   ninjaOne = []; //will work ,array is also a object
//   //ninjaOne="zzbn" //error
//   ninjaOne = { name: "alpha", age: 32, beltColor: "black" };
//   let ninjaTwo: {
//     name: string;
//     age: number;
//     beltColor: string;
//   };
// }
// {
//   // dynamic (any)  types
//   let age: any = 25;
//   age = true;
//   console.log(age); //true
//   age = "hello";
//   console.log(age); //hello
//   age = { name: "luigi" };
//   console.log(age);
//   let mixed: any[] = [];
//   mixed.push(5);
//   mixed.push("mario");
//   mixed.push(false);
//   console.log(mixed);
//   let ninja: { name: any; age: any };
//   ninja = { name: "mario", age: 24 };
//   console.log(ninja);
//   ninja = { name: 24, age: "mario" };
//   console.log(ninja);
//   console.log("first");
// }
{
    //function
    let greet;
    //greet = "hello";/err
    greet = () => {
        console.log("hello again");
    };
    //void represent complete lack of value
    const add = (a, b, c = 10) => {
        console.log(a + b);
        console.log(c);
    };
    add(2, 3);
    add(4, 5, "string");
    add(5, 10, 20);
    const min = (a, b) => {
        return a + b;
    };
    let results = min(10, 7);
    results = 23; //ok
    //result = "str" //err
    //we can also explicitly define the type of return value from a function
    const minus = (a, b) => {
        return a + b;
    };
    let result = minus(10, 7);
    result = 23; //ok
    //result = "str" //err
}
