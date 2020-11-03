/* window.onload = load; 

function load() {
    var wrapper = document.getElementById('wrapper');
    console.log(wrapper);
}
*/

var boxes = document.querySelectorAll('.box');

for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    box.onclick = clickFun;
}

function clickFun(e) {
    var box = e.target;
    box.style.color = 'blue';
    box.style.fontSize = '30pt';
    console.log(box);
}
