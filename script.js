const gridMap = document.querySelector('.gridMap');
const sizeBtn = document.querySelector('.sbmBtn');
const eraserBtn = document.querySelector('.eraser');
const colorPick = document.getElementById('colorId');
const eraserFlag ={current: false};
const isPainting = {current:false};
const fileInput = document.getElementById("pictureUploader");
const uploaderBtn = document.getElementById("uploaderBtn");

document.addEventListener('mousedown', (event) =>{
    if(event.button === 0){
        isPainting.current = true;
        console.log("Push");
    }
})
document.addEventListener('mouseup', () =>{
    isPainting.current = false;
    console.log("Up");
})


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

//Sollte als "Nachmalen"-Feature dienen. Ein Bild hochladen und nachmalen. 
uploaderBtn.addEventListener('click', function(event){
    event.preventDefault();

    const file = fileInput.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e) =>{
            gridMap.style.backgroundImage = `url(${e.target.result})`;
            gridMap.style.backgroundSize = "contain";
            gridMap.style.backgroundRepeat = "no-repeat";
            gridMap.style.backgroundPosition = "center";

        };
        reader.readAsDataURL(file);
    }else{
        alert("Bitte ein Bild wählen!");
    }

})


function createMap(pixel) {
    document.querySelector(".imageForm").style.display = "block";
    let map = document.querySelectorAll(".cell");
    if(map){
        map.forEach(cell => cell.remove());
    }

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
        }else if(isPainting.current){
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

