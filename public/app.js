import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "max",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("i spent ", amount);
        return amount;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("max", "work on the max website", 350);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invOne, invTwo);
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
