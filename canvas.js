const canvas = document.querySelector('canvas');
// Setting width and height
canvas.width  = window.innerWidth;
canvas.height = window.outerHeight;
// make context
const c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius){
    this.x  = x;
    this.y  = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = ()=>{
        const r = Math.random()*30;
        const g = Math.random()*30;
        const b = Math.random()*30;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = `rgba(33,36,61,0.5)`;
        c.strokeStyle = `rgba(33,36,61,0.5)`;
        c.stroke();
        c.fill();
    }
    this.update = ()=>{
        this.draw();
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        };
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        };
        this.x += this.dx;
        this.y += this.dy;
    }
}


const circleArray = [];

for(let i=0; i<80; i++){
    let radius = 40;
    let x  = Math.random()*(innerWidth-2*radius)+radius;
    let y  = Math.random()*(innerHeight-2*radius)+radius;
    let dx = (Math.random()-0.5);
    let dy = (Math.random()-0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i = 0; i<circleArray.length; i++){
        circleArray[i].update();
    };
    requestAnimationFrame(animate);
}
animate();