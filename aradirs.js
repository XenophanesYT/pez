var mouseEvent = &quot;empty&quot;;
var last_position_of_x, last_position_of_y;

canvas = document.getElementById(&#39;myCanvas&#39;);
ctx = canvas.getContext(&quot;2d&quot;);

color = &quot;black&quot;;
width_of_line = 1;
canvas.addEventListener(&quot;mousedown&quot;, my_mousedown);
function my_mousedown(e)
{
//inicio de la actividad adicional
color = document.getElementById(&quot;color&quot;).value;
width_of_line = document.getElementById(&quot;width_of_line&quot;).value;
//final de la actividad adicional

mouseEvent = &quot;mouseDown&quot;;
}

canvas.addEventListener(&quot;mousemove&quot;, my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == &quot;mouseDown&quot;) {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log(&quot;Last position of x and y coordinates = &quot;);
console.log(&quot;x = &quot; + last_position_of_x + &quot;y = &quot; + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log(&quot;Current position of x and y coordinates = &quot;);
console.log(&quot;x = &quot; + current_position_of_mouse_x + &quot;y = &quot; + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener(&quot;mouseup&quot;, my_mouseup);
function my_mouseup(e)
{
mouseEvent = &quot;mouseUP&quot;;
}

canvas.addEventListener(&quot;mouseleave&quot;, my_mouseleave);
function my_mouseleave(e)
{
mouseEvent = &quot;mouseleave&quot;;
}

//actividad adicional

function clearArea() {
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}