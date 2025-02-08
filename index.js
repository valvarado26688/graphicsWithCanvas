let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
// console.log(ctx);


//random circles
// for(i = 0; i < 20; i++) {
    //     let x = Math.random() * window.innerWidth;
    //     let y = Math.random() * window.innerHeight;
    //     ctx.beginPath();
    //     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    //     ctx.strokeStyle = "green";
    //     ctx.stroke();
    // }

    //first circle
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "green";
    ctx.stroke();

    let x = 100; //starting point
    let dx = 1; //velocity;
    radius = 30;
    //animation
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        ctx.beginPath();
        ctx.arc(x, 100, 30, 0, Math.PI * 2, false);
        ctx.strokeStyle = "green";
        ctx.stroke();

        x += dx;

        //basic collision
        if(x > innerWidth) {
            
        }

    }

    animate();