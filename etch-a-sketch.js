// container for the grid
const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");              // create 16 rows
    //square.style.backgroundColor = "pink";
    //square.style.borderStyle = "solid";
    //square.style.borderColor = "black";
    //square.style.borderWidth = "1px";
    row.textContent = 0;                                    // CSS placeholder so that something is displayed
    row.style.display = "flex";                             // make sure it is a grid
    container.appendChild(row);                             // place the div in the DOM

    for (let i = 1; i < 16; i++) {                               
        const column = document.createElement("div");       // create 16 columns
        // square2.style.backgroundColor = "pink";
        // square2.style.borderStyle = "solid";
        // square2.style.borderColor = "black";
        // square2.style.borderWidth = "1px";
        column.textContent = i;                             // CSS placeholder so that something is displayed
        row.appendChild(column);                            // place the div in the DOM
    }
}
