document.getElementById("fondoColor").addEventListener("click",fondo);

let color;
function fondo()
{ if(color)
{
    color = false
    document.body.style.backgroundColor = "white";
}
else
{
    color = true;
    document.body.style.backgroundColor = "blue";

}
}