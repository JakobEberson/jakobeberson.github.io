

var counter = 0;
window.setInterval(
function () {
counter = counter + 1;
document.getElementById("counter").innerHTML = counter;
}, 250);

var counter2 = 0;
window.setInterval(
function () {
counter2 = counter2 + 3;
document.getElementById("counter2").innerHTML = counter2;
}, 125);

var counter3 = 0;
window.setInterval(
function () {
counter3 = counter3 + 2;
document.getElementById("counter3").innerHTML = counter3;
}, 125);

var counter4 = 0;
window.setInterval(
function () {
counter4 = counter4 + 1,5;
document.getElementById("counter4").innerHTML = counter4;
}, 125);
