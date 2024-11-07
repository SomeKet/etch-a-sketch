const map = document.getElementById("sixteenXsixteen");

let color = "";


document.getElementById("btnBlack").addEventListener("click", ()=>{
    color = "black";
})
document.getElementById("btnOrange").addEventListener("click", ()=>{
    color = "orangered";
})
document.getElementById("btnPink").addEventListener("click", ()=>{
    color = "pink";
})
document.getElementById("btnEraser").addEventListener("click", ()=>{
    color = "transparent";
})



function createMap(column, row){
    //Ein Div- row erstellt
    for(let rIndex = 0; rIndex < row; rIndex++ ){
        const rowElement = document.createElement("div");
        rowElement.classList.add("row");
    
    //Dem Div- row, 16 Zellen eingefügt (Spalten)
    for (let cIndex = 0; cIndex < column; cIndex++) {
        const cell = document.createElement("div");
        cell.classList.add("column");


        //Mouseover EventListener
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor= color;
            console.log(color);
        });


        rowElement.appendChild(cell);
        }
        map.appendChild(rowElement);
       
    }
}

document.getElementById("gridForm").addEventListener("submit", function(event){
    event.preventDefault();

    const columns = parseInt(document.getElementById("columns").value, 10);
    const rows = parseInt(document.getElementById("rows").value, 10);

    createMap(columns, rows);
})
