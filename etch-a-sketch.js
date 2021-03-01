// container for the grid
const container = document.querySelector("#container");

// this loop creates the structure of the 16x16 grid
for (let i = 0; i < 16; i++) {                                  // create 15 columns

    for (let j = 0; j < 15; j++) {                              // for each column     
        const row = document.createElement("div");              // create 16 rows
        row.style.backgroundColor = "grey";
        row.style.borderStyle = "solid";
        row.style.borderColor = "black";
        row.style.borderWidth = "1px";
        row.style.height = "50px";
        row.style.width = "50px";
        container.appendChild(row);                             // place the div in the DOM
    }

    const lastRow = document.createElement("div");              // create one last column
    lastRow.style.backgroundColor = "grey";
    lastRow.style.borderStyle = "solid";
    lastRow.style.borderColor = "black";
    lastRow.style.borderWidth = "1px";
    lastRow.style.height = "50px";
    lastRow.style.width = "50px";
    lastRow.style.breakAfter = "always";                        // force line break after this column
    container.appendChild(lastRow);                             // place the div in the DOM
}
