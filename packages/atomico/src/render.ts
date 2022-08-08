import { Counter } from "./counter";

let length = 50;

while (length--) {
    const counter = new Counter();
    document.body.appendChild(counter);
}
