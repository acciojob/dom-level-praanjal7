const element = document.getElementById("level");

let levelCount = 0;
let current = element;

while (current) {
  levelCount++;
  current = current.parentElement;
}

alert("The level of the element is: " + levelCount);
