const canvas = document.querySelector('canvas');
// Setting width and height
canvas.width  = window.innerWidth;
canvas.height = window.outerHeight;
// make context
const c = canvas.getContext("2d");
// =======Rectangle=======
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(100,100,100,100);
// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(400,100,100,100);
// c.fillStyle = "rgba(100, 0, 255, 0.5)";
// c.fillRect(300,300,100,100);
// =======Line=======
// c.beginPath(); //method for make a line("Take a pencil")
// c.moveTo(50,400); //first point
// Another point
// c.lineTo(150,100);
// c.lineTo(250,50);
// c.lineTo(350,400);
// c.strokeStyle = "rgba(40,70,190,0.7)";
// c.stroke();
// =======Circle=======
// c.beginPath();
// c.arc(600, 300, 50, 0, Math.PI*2);
// c.strokeStyle = "firebrick";
// c.stroke();
// Make a many circle
// for (let i=0; i<1000; i++){
//     const x = Math.random()*(innerWidth);
//     const y = Math.random()*(innerHeight);
//     const r = Math.random()*(255);
//     const g = Math.random()*(255);
//     const b = Math.random()*(255);
//     c.beginPath();
//     c.arc(x, y, 50, 0, Math.PI*2);
//     c.strokeStyle = `rgb(${r},${g},${b})`;
//     c.stroke();
// }

let x  = Math.random()*innerWidth;
let y  = Math.random()*innerHeight;
let dx = (Math.random()+3)*1.5;
let dy = (Math.random()+3)*1.5;
let radius = 30;
function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2, false);
    c.strokeStyle = `blue`;
    c.stroke();
    console.log(x);
    if(x + radius > innerWidth || x-radius < 0){
        dx = -dx;
    }
    if(y + radius > innerHeight || y-radius < 0){
        dy = -dy;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(animate);
}
animate();