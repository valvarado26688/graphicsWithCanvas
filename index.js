let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
// console.log(ctx);

//first circle
// ctx.beginPath();
// ctx.arc(100, 100, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "green";
// ctx.stroke();



//object oriented js
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    drawCircle() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = "green";
        ctx.stroke();
    }
    updateCircle() {
        this.drawCircle();
        this.x += this.dx;
        this.y += this.dy;
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        } 
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    }
}

//random starting points
let x = Math.random() * innerWidth; //starting point
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 10; //velocity;
let dy = (Math.random() - 0.5) * 10;
radius = 30;






let generatedCircles = [];

for(let i = 0; i < 20; i++) {
    //random starting points
    let x = Math.random() * innerWidth; //starting point
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5) * 10; //velocity;
    let dy = (Math.random() - 0.5) * 10;
    radius = 30;
    let circle = new Circle(x, y, dx, dy, radius);
    generatedCircles.push(circle);
}
console.log(generatedCircles);

//animation
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    
    generatedCircles.forEach((e) => {
        e.updateCircle();
    })
    



    // x += dx;
    // y += dy;
    
    // //basic collision
    // if(x + radius > innerWidth || x - radius < 0) {
    //     dx = -dx;
    // } 
    // if(y + radius > innerHeight || y - radius < 0) {
    //     dy = -dy;
    // }
    
    
}




animate();




//random circles
// for(i = 0; i < 20; i++) {
    //     let x = Math.random() * window.innerWidth;
    //     let y = Math.random() * window.innerHeight;
    //     ctx.beginPath();
    //     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    //     ctx.strokeStyle = "green";
    //     ctx.stroke();
    // }