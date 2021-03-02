// container for the grid
const container = document.querySelector("#container");

let dracula = 0;                                                // is a count
let size = 16;                                                  // default grid size

// this loop creates the structure of the 16x16 grid
for (let i = 0; i < size; i++) {                                // create 15 columns

    for (let j = 0; j < size - 1; j++) {                        // for each column     
        const row = document.createElement("div");              // create 16 rows
        row.id = `square${dracula}`;                            // give a unique id to each square on grid
        row.classList.add("row");                               // apply some CSS
        container.appendChild(row);                             // place the div in the DOM
        dracula++;
    }

    const lastRow = document.createElement("div");              // create one last column
    lastRow.id = `square${dracula}`;                            // give a unique id to each square on grid
    lastRow.classList.add("lastRow");                           // apply some CSS
    container.appendChild(lastRow);                             // place the div in the DOM
    dracula++;
}


// this block changes the background color of each square on grid when mouseovered
for (k = 0; k < dracula; k++){
    const square = document.querySelector(`#square${k}`);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
})
}

// this function changes the color to all the squares on grid to white
function clearGrid() {
    for (k = 0; k < dracula; k++){
        const square = document.querySelector(`#square${k}`);
        square.style.backgroundColor = "white";
    }
}

// call the clearGrid() function when the clear button is clicked
let btnTrigger = document.getElementById("clear");
btnTrigger.onclick=clearGrid;
