const gridMap = document.querySelector('.gridMap');
const sizeBtn = document.querySelector('.sbmBtn');
const eraserBtn = document.querySelector('.eraser');
const colorPara = document.querySelector('.colorRGBA');


sizeBtn.addEventListener('click', function(e){
    e.preventDefault();
    const size = document.getElementById("sizeInput").value;
    createMap(size);

})


function createMap(pixel) {
    let size = (100 / pixel) + "%";
    gridMap.style.cssText = ('style', `height:${gridMap.clientWidth}px`);

    for (let index = 0; index < pixel ** 2; index++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute('style', `text-align:center; width:${size}; height:${size}; background-color:white`);
        
        coloring(cell);
        gridMap.appendChild(cell);
    }
}

function coloring(element){
    var opac = 1;
    element.addEventListener('mouseover', ()=>{
        const color = document.getElementById('colorId').value;

        var red = parseInt(color.substring(1,3), 16);
        var green = parseInt(color.substring(3,5), 16);
        var blue = parseInt(color.substring(5,7), 16);
    
        if(opac < 11){
            var rgba = `rgba(${red}, ${green}, ${blue}, ${opac/10})`;
            element.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opac/10})`;
            console.log(rgba);
            opac ++;
        }else{
            console.log("finish")
        }
    })

  
}
