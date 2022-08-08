import { Counter } from "./counter";

let length = 1000;

while (length--) {
    const counter = new Counter();
    document.body.appendChild(counter);
}
