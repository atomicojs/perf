import "./counter";
let length = 1000;

while (length--) {
    const counter = document.createElement("my-counter");
    document.body.appendChild(counter);
}
