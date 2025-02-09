let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
// console.log(ctx);

//first circle, good circle
// ctx.beginPath();
// ctx.arc(100, 100, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "green";
// ctx.stroke();

//class helps streamline the proccess of making however many circles i want
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx; //dx dy represents velocity
        this.dy = dy;
        this.radius = radius;
    }

    //these methods will draw and increment each circle's position
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



//circles info will be stored in an array 
let generatedCircles = [];

//loop iterates how many circles i want to spawn
for(let i = 0; i < 100; i++) {
    radius = 30;

    //random starting points
    //math ensures the center of the circle is (radius) away from borders
    let x = Math.random() * (innerWidth - (radius * 2)) + radius; 
    let y = Math.random() * (innerHeight - (radius * 2)) + radius;
    //random velocity
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    //new circle with fresh coordinates and velocity
    let circle = new Circle(x, y, dx, dy, radius);

    //circle added to the array 
    generatedCircles.push(circle);
}

console.log(generatedCircles);


//animation
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    //for every circle that is stored in the array, execute updateCircle()
    generatedCircles.forEach((e) => {
        e.updateCircle();
    })
    
}


animate();