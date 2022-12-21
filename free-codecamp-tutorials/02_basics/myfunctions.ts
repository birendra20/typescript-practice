function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("hitesh");

signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com");

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

// never also appears when TypeScript determines there’s nothing left in a union.

export {};
