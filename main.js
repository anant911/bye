var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
radius=20;


color="cyan";
width_of_line=3;


canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown(e)
{

    mouseEvent="mouseDown";


}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)

{

    mouseEvent="mouseleave";
}


canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)

{

    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)

{

    

current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;



if (mouseEvent== "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(current_position_of_x, current_position_of_y,radius,0, 2* Math.PI);

    console.log("last position of x and y coordinates= ");
    console.log("x=" + last_position_of_x+ "y="+last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    
    ctx.stroke();

}
last_position_of_x= current_position_of_x;
last_position_of_y=current_position_of_y;
}

