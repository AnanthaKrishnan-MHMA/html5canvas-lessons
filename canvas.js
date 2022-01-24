const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
const rand = (a) => {
    const randomNum = Math.floor(Math.random() * a)+1
    return randomNum
}
const randColor = () => {
    const color = `rgb(${rand(255)},${rand(255)},${rand(255)})`;
    return color
}

//line
// c.beginPath();
// c.moveTo(100,100)
// c.lineTo(150,70)
// c.lineTo(250,70)
// c.lineTo(200,100)
// c.moveTo(250,70)
// c.lineTo(250,160)
// c.lineTo(200,190)
// c.strokeStyle = "rgb(255,020,100)"
// c.stroke()

//rectangle
// c.fillRect(100,100,100,90);
// c.fillRect(200,200,100,90);
// c.fillRect(300,300,100,90);
// c.fillRect(400,400,100,90);
// c.fillRect(500,500,100,90);

// for(let i=1; i<=6; i++){
//     const coordinate = i*100;
//     const color = randColor();
//     c.fillStyle = color;
//     c.fillRect(coordinate,coordinate,100,90);
// }

//sphere
// for(let i=0; i<50; i++){
//     const x = rand(1000);
//     const y = rand(1000);
//     c.beginPath();
//     c.arc(x, y, 50, 0, Math.PI * 2, false);
//     c.strokeStyle = randColor();
//     c.stroke();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = randColor();
//     c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = () => {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = 'blue';
        c.strokeStyle = randColor();
        c.fill();
        c.stroke();
    }
    this.update = () => {

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}
let circleArray = [];
for (let i = 0; i < 100; i++) {
    // dont know logic here 
    let x = rand(window.innerWidth);
    let y = rand(window.innerHeight);
    let dx = (Math.floor(Math.random()-0.5) * 4)+1;
    let dy = (Math.floor(Math.random()-0.5) * 4)+1;
    let radius = rand(40) + 10;
    const circle = new Circle(x, y, dx, dy, radius);
    circleArray.push(circle);
}
function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    // c.clearRect(0, 0, innerWidth, innerHeight)
    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI*2, false);
    // c.strokeStyle = 'blue';
    // c.strokeStyle = randColor();
    // c.fillStyle = randColor();
    // c.fillStyle = 'teal';
    // c.fill();
    // c.stroke();
    // if(x + radius > innerWidth || x -radius < 0){
    //     dx = -dx
    // }
    // if(y + radius > innerHeight || y -radius < 0){
    //     dy = -dy
    // }

    // x += dx;
    // y += dy;
}
animation()


