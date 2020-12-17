var mouseEvent = "empty";
var lastpositionofx,lastpositionofy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue"
widthofline = 2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e){
    color = document.getElementById("color").value;
    widthofline = document.getElementById("widthofline").value;
  radius = document.getElementById("radius123").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthofline;
    console.log("Current position of x and y coorinates are =");
    console.log("x ="+ current_position_of_mouse_x+"y = "+current_position_of_mouse_y);
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius ,0 ,2 * Math.PI);
    ctx.stroke();
}
}
function cleararea(){ ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}