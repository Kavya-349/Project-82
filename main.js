var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "red";
var width = 3;
var radius = 5;

var last_position_of_x, last_position_of_y;

var mouse_event = "empty";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color_input").value;
    width = document.getElementById("width_input").value;
    radius = document.getElementById("radius_input").value;

    mouse_event = "mouseDown";
    console.log("mouseDown");

    last_position_of_x = e.clientX - canvas.offsetLeft;
    last_position_of_y = e.clientY - canvas.offsetTop;
    console.log("last_position_of_x and y coordinates");
    console.log("x = "+ last_position_of_x + " | y = "+ last_position_of_y); 
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_position_of_x = e.clientX - canvas.offsetLeft;
    var current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mouseDown") {
        console.log("current_position_of_x and y coordinates");
        console.log("x = "+ current_position_of_x + " | y = "+ current_position_of_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2 * Math.PI);
        ctx.stroke();

    }
}
// Code for mouseup and mouseleave.
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouse_event = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouse_event = "mouseLeave";
}
//

//clear area function
function cleararea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}