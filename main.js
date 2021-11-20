var mouseEvent = "empty";


canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvenet = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_posiiton_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_moues_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x =" + current_position_of_mouse_x + "y =" + current_posiiton_of+mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_posiiton_of_mouse_x, current_position_of_moues_y, radius, 0, 2 * MathPI)
        ctx.stroke();

    }
    
}
canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "leave";
        
    }


    function clearArea() 
    {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }