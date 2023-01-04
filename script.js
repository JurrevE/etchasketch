container = document.querySelector(".container")
//this shit causes a container to be selected that has already been created in the html
// Then he creates 16 x 16 divs for drawing
// thus creates 256 divs called grid and gives each of them the classname of canvas
// add the schedules as a child to container's parent node
let createCanvas = function(newgrid) {
    for(i=0; i<Math.pow(newgrid, 2); i++) {
    const div = document.createElement("div");
    div.style.height = 400/newgrid + "px"
    div.style.width = 400/newgrid + "px"
    div.className = "canvas"
    document.getElementById("container").appendChild(div)
    }
}

createCanvas()
let draw = function () {
const canvas = document.querySelectorAll(".canvas")
canvas.forEach(canvas => {
    canvas.addEventListener("mouseover", function (e) {
        e.target.style.background = "black"
    })

})
}

let changeGridSize = function() {
    newgrid = window.prompt("Choose new amount of squares per side!")
    const div = document.querySelectorAll(".canvas")
    function removeElement(elem) {
        document.getElementById("container").removeChild(elem)
        
    }
    
    div.forEach(removeElement)
    
    createCanvas(newgrid)
    changeStyle(newgrid)
}
    const gridbutton = document.querySelector(".gridbutton")
gridbutton.addEventListener("click", changeGridSize, draw)

// function changeStyle(newgrid){
//     const element = document.querySelectorAll(".canvas")
//     element.style.height = 400/newgrid+"px"
//     element.style.width = 400/newgrid+"px"
// }
