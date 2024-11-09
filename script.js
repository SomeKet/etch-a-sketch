const gridMap = document.querySelector('.gridMap');
const color = {current:""};
const sizeBtn = document.querySelector('.sbmButton');
const eraserBtn = document.querySelector('.eraser');

sizeBtn.addEventListener('submit', function(e){
    e.preventDefault();
    const size = document.getElementById('sizeInput').value;

    if(size < 0 || size > 100){
        alert("Wähle eine Zahlen zwischen 1 und 100");
    }
    console.log("!")
    createMap(size);

})



function createMap(pixel){
    
    for(let rIndex = 0; rIndex < pixel; rIndex++ ){
        const rowElement = document.createElement("div");
        rowElement.classList.add("row");
    
    
    for (let cIndex = 0; cIndex < pixel; cIndex++) {
        const cell = document.createElement("div");
        cell.classList.add("column");

        //Mouseover EventListener
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor= color.current;
        });

        rowElement.appendChild(cell);
        }
        gridMap.appendChild(rowElement);
       
    }
}
