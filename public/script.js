document.body.style.margin   = 0
document.body.style.overflow = `hidden`

//traditional way
// function print (msg) {
//    console.log (msg)
// }

// print (`what's up`)

//arrow syntax
// const print = (msg) => {
//    console.log(msg)
// }

// print (`what's up?`)

//remove curly bracket
// const print = (msg) => console.log(msg)

// print (`what's up?`)

//remove parenthesis because only one argument msg
const print = msg => console.log(msg)

print (`what's up?`)

const ex_arr = [ 'a', 'b', 'c']

//length is stored as a property of the array, describes how many elements in an array, log it into the console
print (ex_arr.length)

// ex_arr.forEach (print) //grab the elements in the array, print 3 times to the console

ex_arr.forEach (el => console.log (el)) //'el' is an arbitrary variable, declare here, whatever 'el' is, pass it to the console


// const cnv = document.getElementById (`cnv_element`) //assigning to variable cnv cnv_element
// cnv.width = innerWidth //assigning the width of the viewport to canvas width.
// cnv.height = innerHeight //we want the height of the viewport to be canvas height.

// const ctx = cnv.getContext (`2d`) //context is the thing we use to draw on the canvas

// const draw_frame = () => {
//    ctx.fillStyle = `turquoise` //addressing the context
//    ctx.fillRect (0, 0, innerWidth, innerHeight) //in p5, it's bg, make whole thing this color

//    requestAnimationFrame (draw_frame)
// }

// draw_frame ()

// window.onresize = () => { //resize the window, resize the canvas
//    cnv.width = innerWidth
//    cnv.height = innerHeight   
// }