const canvas = document.getElementById("c1");
const ctx = canvas.getContext("2d"); // context

//first way to create rectangle
// ctx.fillRect(x, y, w, h); // rectangle
ctx.fillStyle = "grey"; // background for Rect
ctx.fillRect(100, 50, 150, 70);

ctx.fillStyle = "red";
ctx.fillRect(100, 50, 50, 50);

// ctx.clearRect(x, y, w, h);
ctx.clearRect(0, 0, 400, 200); // clear all canvas

// ctx.clearRect(100, 50, 50, 50);

// second way to create rectangle
ctx.rect(50, 20, 100, 50);
ctx.strokeStyle = "purple";
ctx.lineWidth = "3";
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();
