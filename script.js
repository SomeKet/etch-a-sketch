const gridMap = document.querySelector('.gridMap');
const sizeBtn = document.querySelector('.sbmBtn');
const eraserBtn = document.querySelector('.eraser');
const colorPick = document.getElementById('colorId');
const eraserFlag ={current: false};



sizeBtn.addEventListener('click', function(e){
    e.preventDefault();
    const size = document.getElementById("sizeInput").value;
    createMap(size);

})

//Flag setzen für Farbe oder Radiergummi
eraserBtn.addEventListener('click', ()=>{
    eraserFlag.current = true;
})
colorPick.addEventListener('click', ()=>{
    eraserFlag.current = false;
})


function createMap(pixel) {
    let size = (100 / pixel) + "%";
    gridMap.style.cssText = ('style', `height:${gridMap.clientWidth}px`);

    for (let index = 0; index < pixel ** 2; index++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute('style', `text-align:center; width:${size}; height:${size}; background-color:transparent`);
        
        coloring(cell);
        gridMap.appendChild(cell);
    }
}

function coloring(element){
    var opac = 1;
    var prevColor = null;

    element.addEventListener('mouseover', ()=>{
        if(eraserFlag.current == true){
            element.style.backgroundColor = "transparent";
        }else{
            //Farbe aus Input
            const color = colorPick.value;
    
            //color in RGB parsen
            var red = parseInt(color.substring(1,3),16);
            var green = parseInt(color.substring(3,5),16);
            var blue = parseInt(color.substring(5,7),16);
    
            //Abfrage ob neue Farbe eintritt, damit Element resetet wird
            if(prevColor !== color){
                opac = 1;
                prevColor = color;
            }
    
            if(opac <= 10){
                element.style.backgroundColor = `rgba(${red},${green},${blue},${opac/10})`;
                opac ++;
            }
        }
    })      
}
