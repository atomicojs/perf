import "./counter";
let length = 50;

while (length--) {
    const counter = document.createElement("my-counter");
    document.body.appendChild(counter);
}
