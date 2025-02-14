let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");


window.addEventListener("resize", (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initialization();
})


let mouse = {x: undefined, y: undefined};
window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    // console.log(mouse);
});

let colorArray = [ 
    "#F2059F",
    "#F205CB",
    "#EE05F2", 
    "#9305F2", 
    "#0D0D0D"
]


let minRadius = 2;
let maxRadius = 50;

//class helps streamline the proccess of making however many circles i want
class Circle {
    constructor(x, y, dx, dy, radius, maxRadius) {
        this.x = x;
        this.y = y;
        this.dx = dx; //dx dy represents velocity
        this.dy = dy;
        this.radius = radius;
        this.maxRadius = maxRadius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    
    //these methods will draw and increment each circle's position
    drawCircle() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = "green";
        // ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
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
        
        //interactivity
        if(this.x - mouse.x < 50 && this.x - mouse.x > -50 && this.y - mouse.y < 50 && this.y - mouse.y > -50) {
            if(this.radius < this.maxRadius) { //this should be specified as a "max radius"
                this.radius += 1;
            }
        } else if(this.radius > this.minRadius) {
            this.radius -= 1;
        }
        
    }
}



//circles info will be stored in an array 
let generatedCircles = [];

function initialization() {
generatedCircles = [];

//loop iterates how many circles I want to spawn
for(let i = 0; i < 1000; i++) {
    radius = Math.random() * 3 + 1;

    //random starting points
    let x = Math.random() * (innerWidth - (radius * 2)) + radius; 
    let y = Math.random() * (innerHeight - (radius * 2)) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;

    //new circle with fresh coordinates and velocity
    let circle = new Circle(x, y, dx, dy, radius, maxRadius, minRadius);

    //circle added to the array 
    generatedCircles.push(circle);
}
}


//animation
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight,);

    generatedCircles.forEach((e) => {
        e.updateCircle();
    })
    
}

initialization();
animate();