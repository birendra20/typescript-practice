import { Invoice } from "./classes/Invoice.js";

//interfaces

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "max",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("i spent ", amount);
    return amount;
  },
};
console.log(me);

const greetPerson = (person: isPerson) => {
  console.log("hello", person.name);
};
greetPerson(me);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("max", "work on the max website", 350);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invOne, invTwo);
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
