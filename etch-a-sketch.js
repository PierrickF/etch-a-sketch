// container for the grid
const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {                          // do the following block 16 times
    const square = document.createElement("div");       // create a div (a box in the grid)
square.style.backgroundColor = "pink";                  // apply some CSS
square.textContent = "placeholder";                     // apply some CSS

container.appendChild(square);                          // place the div in the DOM
}
