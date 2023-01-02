container = document.querySelector(".container")
//this shit causes a container to be selected that has already been created in the html
// Then he creates 16 x 16 divs for drawing
// thus creates 256 divs called grid and gives each of them the classname of canvas
// add the schedules as a child to container's parent node
let createCanvas = function() {
    for(i=0; i<256;i++) {
    const div = document.createElement("div");
    div.className = "canvas"
    document.getElementById("container").appendChild(div)
    }
}

const canvas = document.querySelectorAll(".canvas")
canvas.forEach(canvas => {
    canvas.addEventListener("mouseover", function (e) {
        e.target.style.background = "black"
})

})
let changeGridSize = function(num) {
    newgrid = window.prompt("Choose new amount of squares per side!")
    console.log(newgrid)
    
}

const gridbutton = document.querySelector(".gridbutton")
gridbutton.addEventListener("click", changeGridSize)

// function changeBG() {
//     let kleurtjes = document.querySelector(".canvas")
//     kleurtjes.getElementsByClassName.backgroundColor = "black"
// }
createCanvas()