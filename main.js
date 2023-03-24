var canvas = document.getElementById('desenho');
var ctx = canvas.getContext('2d');
var color = "chocolate";
var bt = document.getElementById('bt');
var lastpositionX, lastpositionY;
var l = 2;
var width = screen.width;
var nl = screen.width - 100;
var na = screen.height - 300;

if (width < 992) {
    document.getElementById('desenho').width = nl;
    document.getElementById('desenho').height = na;
    document.body.style.overflow = 'hidden';
}

canvas.addEventListener('touchstart', mts);
function mts(e) {
    color = document.getElementById('color').value;
    l = document.getElementById('largura').value;
    lastpositionX = e.touches[0].clientX - canvas.offsetLeft;
    lastpositionY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener('touchmove', mtm);
function mtm(e) {
    var positionX = e.touches[0].clientX - canvas.offsetLeft;
    var positionY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth =l;
    ctx.moveTo(lastpositionX, lastpositionY);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();

    lastpositionX = positionX;
    lastpositionY = positionY;
}
bt.addEventListener('click', limpar);
function limpar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}