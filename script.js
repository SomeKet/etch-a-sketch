const map = document.getElementById("sixteenXsixteen");

function createMap(column, row){
    //Ein Div- row erstellt
    for(let rIndex = 0; rIndex < row; rIndex++ ){
        const rowElement = document.createElement("div");
        rowElement.classList.add("row");
    
    //Dem Div- row, 16 Zellen eingefügt (Spalten)
    for (let cIndex = 0; cIndex < column; cIndex++) {
        const cell = document.createElement("div");
        cell.classList.add("column");
        rowElement.appendChild(cell);
        }
        map.appendChild(rowElement);
       
    }
}
createMap(16,16);