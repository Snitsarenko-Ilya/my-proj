var circle = document.getElementById('animatedCircle');

function colorCircle() {
    var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    circle.setAttribute('fill', newColor);
}
setInterval(colorCircle, 1500);