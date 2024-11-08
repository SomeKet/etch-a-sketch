const map = document.getElementById("sixteenXsixteen");

//Picked color Attribute
const color = {current: ""};

//Create GridMap with row x column size
function createMap(row, column){
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
            cell.style.backgroundColor= color.current;
        });

        rowElement.appendChild(cell);
        }
        map.appendChild(rowElement);
       
    }
}

//Durch eintragen der Zeilen und Spalten und absenden durch "submit", werden die Werte in die createMap- Methode eingetragen
document.getElementById("gridForm").addEventListener("submit", function(event){
    event.preventDefault();

    const columns = parseInt(document.getElementById("columns").value, 10);
    const rows = parseInt(document.getElementById("rows").value, 10);

    createMap(columns, rows);
})

//Radiergummi
document.getElementById("btnEraser").addEventListener("click", ()=>{
    color.current = "transparent";
})

//Input-ColorScheme Auswahlfeld
document.getElementById("colorForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    const colorPick = document.getElementById("colorpicker").value;
    console.log(colorPick);
    color.current = colorPick;
});

//Zurücksetzen
document.getElementById("deletePicture").addEventListener("click", ()=> {
    const map = document.querySelectorAll(".column");
    map.forEach(cell => cell.style.backgroundColor = "white");
})