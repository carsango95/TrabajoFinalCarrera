//canvas BIEN
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//variables BIEN
var frames = 0
var background = "images/background.jpeg"
var oblak = "images/oblak.png"
var ball = "images/pelota.png"
var balls = []

//CONSTRUCTORS 

//BIEN
function Background(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.imagen = new Image()
    this.imagen.src = background
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

//
function Oblak(){
   this.x = canvas.width - 540
    this.y = canvas.height - 308
    this.width = 80
    this.height = 80
    this.imagen = new Image()
    this.imagen.src = oblak
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
    if(this.x < 0) this.x = 0
    if(this.x > canvas.width) this.x = canvas.width - 8
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
    
    this.checkIfTouch = function(ball){
    return (this.x < ball.x + ball.width) &&
            (this.x + this.width > ball.x) &&
            (this.y < ball.y + ball.height) &&
            (this.y + this.height > ball.y);
    }
  
}

//
function Ball(x){
    this.x = x
    this.y = 600
    this.width = 30
    this.height = 30
    this.imagen = new Image()
    this.imagen.src = ball
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y = this.y - 5 //velocidad pelota
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}


//instancias BIEN
var bg = new Background()
var gk = new Oblak()


//main functions
function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    frames++
    bg.draw()
    gk.draw()
    generateBalls()
    drawBalls()
    checkCollition()
}

function start(){
    interval = setInterval(update,1000/60)
}

function gameOver(){
    clearInterval(interval)
    ctx.font = "50px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText('GAME OVER',100,100)
    //ctx.fillText(balls.length, 226,150)
}
//aux functions

function generateBalls(){
    if(frames % 64 === 0){
        const x = Math.floor(Math.random() * 16)
        balls.push(new Ball(x * 64))
    }
}

function drawBalls(){
    balls.forEach(function(ball){
        ball.draw()
    })
}

function checkCollition(){
    balls.forEach(ball=>{
        if(gk.checkIfTouch(ball)){
            gameOver()
        }
    })
}


//listeners BIEN

addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        if(gk.x <= 0) return
        gk.x -= 64;
    }
    if(e.keyCode === 39){
        if(gk.x >= canvas.width - 64) return
        gk.x += 64;
    }
    
})


//the beginnig
start()