var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "red";
var width = 3;
var radius = 30;

var last_position_of_x, last_position_of_y;

var mouse_event = "empty";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color_input");
    width = document.getElementById("width_input");
    radius = document.getElementById("radius_input");

    mouse_event = "mouseDown";
    console.log("mouseDown");

    last_position_of_x = e.clientX - offSetLeft;
    last_position_of_y = e.clientY - offSetTop; 
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_x = e.clientX - offSetLeft;
    current_position_of_y = e.clientX - offSetTop;

    if(mouse_event == "mouseDown") {
        console.log("current_position_of_x and y coordinates");
        console.log("x = "+ current_position_of_x + "y = "+ current_position_of_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
        ctx.stroke();

    }
}