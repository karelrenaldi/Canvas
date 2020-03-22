const canvas = document.querySelector('canvas');
const circleArray = [];
const mouse = {
    x:undefined,
    y:undefined
};
const maxRadius = 50;
const minRadius = 10;
const colorArray = ["#f35588","#05dfd7","#a3f7bf","#fff591"];

window.addEventListener('mousemove',(e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
});

// Setting width and height
canvas.width  = window.innerWidth;
canvas.height = window.outerHeight;
// make context
const c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius, color){
    this.x  = x;
    this.y  = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.draw = ()=>{
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
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
        // Interactive
        if(mouse.x-this.x < 50 && mouse.y-this.y < 50 &&mouse.x-this.x > -50 && mouse.y-this.y > -50){
            if(this.radius < maxRadius){
                this.radius += 1;
            };
        }else if(this.radius > minRadius){
            this.radius -= 1;
        }
    };
};


for(let i=0; i<120; i++){
    let radius = minRadius;
    let x  = Math.random()*(innerWidth-2*radius)+radius;
    let y  = Math.random()*(innerHeight-2*radius)+radius;
    let dx = (Math.random()-0.5);
    let dy = (Math.random()-0.5);
    let color = colorArray[Math.floor(Math.random()*colorArray.length)];
    circleArray.push(new Circle(x, y, dx, dy, radius, color));
}

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i = 0; i<circleArray.length; i++){
        circleArray[i].update();
    };
    requestAnimationFrame(animate);
}
animate();